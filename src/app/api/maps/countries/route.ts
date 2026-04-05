import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CountryModel } from "@/models/Country";
import { toSlug } from "@/utils/slugify";

/** GET /api/maps/countries — list all visited countries */
export async function GET() {
  try {
    await connectDB();
    const countries = await CountryModel.find({}).sort({ name: 1 }).lean();
    return NextResponse.json({ ok: true, countries }, { status: 200 });
  } catch (err) {
    console.error("GET /api/maps/countries error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}

/** POST /api/maps/countries — create a new country entry (admin only) */
export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.MAPS_ADMIN_API_KEY) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    if (!body?.name) {
      return NextResponse.json(
        { ok: false, error: "name is required" },
        { status: 400 }
      );
    }
    if (body?.coordinates?.lat == null || body?.coordinates?.lng == null) {
      return NextResponse.json(
        { ok: false, error: "coordinates.lat and coordinates.lng are required" },
        { status: 400 }
      );
    }

    const slug = body.slug || toSlug(body.name);

    const existing = await CountryModel.findOne({ slug }).lean();
    if (existing) {
      return NextResponse.json(
        { ok: false, error: "Country with this slug already exists" },
        { status: 409 }
      );
    }

    const country = await CountryModel.create({
      name: body.name,
      slug,
      isoCode: body.isoCode || "",
      coordinates: body.coordinates,
      description: body.description || "",
      travelledAt: body.travelledAt ? new Date(body.travelledAt) : undefined,
      coverImage: body.coverImage || "",
      zoomLevel: body.zoomLevel ?? 5,
    });

    return NextResponse.json({ ok: true, country }, { status: 201 });
  } catch (err) {
    console.error("POST /api/maps/countries error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to create country" },
      { status: 500 }
    );
  }
}
