import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CountryModel } from "@/models/Country";
import { CityModel } from "@/models/City";
import { toSlug } from "@/utils/slugify";

interface ImportCountryInput {
  name: string;
  slug?: string;
  isoCode?: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  travelledAt?: string;
  coverImage?: string;
  zoomLevel?: number;
}

interface ImportCityPhotoInput {
  url: string;
  caption?: string;
  takenAt?: string;
}

interface ImportCityInput {
  name: string;
  slug?: string;
  countrySlug: string;
  countryName?: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  travelledAt?: string;
  coverImage?: string;
  photos?: ImportCityPhotoInput[];
}

interface ImportPayload {
  countries?: ImportCountryInput[];
  cities?: ImportCityInput[];
  mode?: "upsert" | "replace";
}

function hasValidCoordinates(coords: unknown): coords is { lat: number; lng: number } {
  if (!coords || typeof coords !== "object") return false;
  const candidate = coords as { lat?: unknown; lng?: unknown };
  return typeof candidate.lat === "number" && typeof candidate.lng === "number";
}

/**
 * POST /api/maps/import
 *
 * Secure bulk importer for maps data.
 * - mode=upsert (default): update existing records by slug or create new ones
 * - mode=replace: delete all country/city data first, then insert payload
 */
export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.MAPS_ADMIN_API_KEY) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const body = (await req.json()) as ImportPayload;
    const countries = Array.isArray(body.countries) ? body.countries : [];
    const cities = Array.isArray(body.cities) ? body.cities : [];
    const mode = body.mode || "upsert";

    if (countries.length === 0 && cities.length === 0) {
      return NextResponse.json(
        { ok: false, error: "Provide countries and/or cities arrays" },
        { status: 400 }
      );
    }

    if (mode !== "upsert" && mode !== "replace") {
      return NextResponse.json(
        { ok: false, error: "mode must be either 'upsert' or 'replace'" },
        { status: 400 }
      );
    }

    if (mode === "replace") {
      await CityModel.deleteMany({});
      await CountryModel.deleteMany({});
    }

    // Keep a map of countrySlug -> countryName for city imports.
    const countryNameBySlug = new Map<string, string>();

    let countriesCreated = 0;
    let countriesUpdated = 0;

    for (const country of countries) {
      if (!country?.name) {
        return NextResponse.json(
          { ok: false, error: "Each country requires name" },
          { status: 400 }
        );
      }
      if (!hasValidCoordinates(country.coordinates)) {
        return NextResponse.json(
          {
            ok: false,
            error: `Country '${country.name}' must include coordinates.lat and coordinates.lng`,
          },
          { status: 400 }
        );
      }

      const slug = (country.slug || toSlug(country.name)).trim();

      const update = {
        name: country.name,
        slug,
        isoCode: country.isoCode || "",
        coordinates: country.coordinates,
        description: country.description || "",
        travelledAt: country.travelledAt ? new Date(country.travelledAt) : undefined,
        coverImage: country.coverImage || "",
        zoomLevel: country.zoomLevel ?? 5,
      };

      const existing = await CountryModel.findOne({ slug }).lean();
      if (existing) {
        await CountryModel.updateOne({ slug }, { $set: update });
        countriesUpdated += 1;
      } else {
        await CountryModel.create(update);
        countriesCreated += 1;
      }

      countryNameBySlug.set(slug, country.name);
    }

    // Load existing countries too (needed when payload imports only cities)
    const existingCountries = await CountryModel.find({})
      .select("slug name")
      .lean();
    for (const c of existingCountries) {
      countryNameBySlug.set(c.slug, c.name);
    }

    let citiesCreated = 0;
    let citiesUpdated = 0;

    for (const city of cities) {
      if (!city?.name) {
        return NextResponse.json(
          { ok: false, error: "Each city requires name" },
          { status: 400 }
        );
      }
      if (!city?.countrySlug) {
        return NextResponse.json(
          { ok: false, error: `City '${city.name}' requires countrySlug` },
          { status: 400 }
        );
      }
      if (!hasValidCoordinates(city.coordinates)) {
        return NextResponse.json(
          {
            ok: false,
            error: `City '${city.name}' must include coordinates.lat and coordinates.lng`,
          },
          { status: 400 }
        );
      }

      const normalizedCountrySlug = city.countrySlug.trim();
      const countryName = city.countryName || countryNameBySlug.get(normalizedCountrySlug);

      if (!countryName) {
        return NextResponse.json(
          {
            ok: false,
            error: `City '${city.name}' references missing countrySlug '${normalizedCountrySlug}'`,
          },
          { status: 400 }
        );
      }

      const slug = (city.slug || toSlug(city.name)).trim();

      const photos = (city.photos || [])
        .filter((photo) => photo?.url)
        .map((photo) => ({
          url: photo.url,
          caption: photo.caption || "",
          takenAt: photo.takenAt ? new Date(photo.takenAt) : undefined,
        }));

      const update = {
        name: city.name,
        slug,
        countrySlug: normalizedCountrySlug,
        countryName,
        coordinates: city.coordinates,
        description: city.description || "",
        travelledAt: city.travelledAt ? new Date(city.travelledAt) : undefined,
        coverImage: city.coverImage || "",
        photos,
      };

      const existing = await CityModel.findOne({ slug }).lean();
      if (existing) {
        await CityModel.updateOne({ slug }, { $set: update });
        citiesUpdated += 1;
      } else {
        await CityModel.create(update);
        citiesCreated += 1;
      }
    }

    return NextResponse.json(
      {
        ok: true,
        mode,
        summary: {
          countries: {
            created: countriesCreated,
            updated: countriesUpdated,
            received: countries.length,
          },
          cities: {
            created: citiesCreated,
            updated: citiesUpdated,
            received: cities.length,
          },
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("POST /api/maps/import error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to import maps data" },
      { status: 500 }
    );
  }
}
