import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CountryModel } from "@/models/Country";
import { CityModel } from "@/models/City";

/** GET /api/maps/countries/[slug] — fetches country details + all cities in it */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const country = await CountryModel.findOne({ slug }).lean();
    if (!country) {
      return NextResponse.json(
        { ok: false, error: "Country not found" },
        { status: 404 }
      );
    }

    const cities = await CityModel.find({ countrySlug: slug })
      .sort({ name: 1 })
      .lean()
      .select("name slug countrySlug countryName coordinates coverImage travelledAt description");

    return NextResponse.json(
      { ok: true, country: { ...country, cities } },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/maps/countries/[slug] error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch country" },
      { status: 500 }
    );
  }
}
