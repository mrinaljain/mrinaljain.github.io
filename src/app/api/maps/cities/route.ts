import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CityModel } from "@/models/City";
import { CountryModel } from "@/models/Country";
import { toSlug } from "@/utils/slugify";

/** GET /api/maps/cities — list all visited cities */
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const countrySlug = searchParams.get("country");

    const filter = countrySlug ? { countrySlug } : {};
    const cities = await CityModel.find(filter).sort({ name: 1 }).lean();
    return NextResponse.json({ ok: true, cities }, { status: 200 });
  } catch (err) {
    console.error("GET /api/maps/cities error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch cities" },
      { status: 500 }
    );
  }
}

/** POST /api/maps/cities — create a new city entry (admin only) */
export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.MAPS_ADMIN_API_KEY) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    if (!body?.name) {
      return NextResponse.json({ ok: false, error: "name is required" }, { status: 400 });
    }
    if (!body?.countrySlug) {
      return NextResponse.json({ ok: false, error: "countrySlug is required" }, { status: 400 });
    }
    if (body?.coordinates?.lat == null || body?.coordinates?.lng == null) {
      return NextResponse.json(
        { ok: false, error: "coordinates.lat and coordinates.lng are required" },
        { status: 400 }
      );
    }

    // Verify country exists
    const country = await CountryModel.findOne({ slug: body.countrySlug }).lean();
    if (!country) {
      return NextResponse.json(
        { ok: false, error: "Country not found for given countrySlug" },
        { status: 404 }
      );
    }

    const slug = body.slug || toSlug(body.name);

    const existing = await CityModel.findOne({ slug }).lean();
    if (existing) {
      return NextResponse.json(
        { ok: false, error: "City with this slug already exists" },
        { status: 409 }
      );
    }

    const city = await CityModel.create({
      name: body.name,
      slug,
      countrySlug: body.countrySlug,
      countryName: country.name,
      coordinates: body.coordinates,
      description: body.description || "",
      travelledAt: body.travelledAt ? new Date(body.travelledAt) : undefined,
      coverImage: body.coverImage || "",
      photos: body.photos || [],
    });

    return NextResponse.json({ ok: true, city }, { status: 201 });
  } catch (err) {
    console.error("POST /api/maps/cities error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to create city" },
      { status: 500 }
    );
  }
}
