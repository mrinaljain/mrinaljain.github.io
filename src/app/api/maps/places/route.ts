import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CountryModel } from "@/models/Country";

/** GET /api/maps/places — returns all visited countries for the world map */
export async function GET() {
  try {
    await connectDB();

    const countries = await CountryModel.find({})
      .sort({ name: 1 })
      .lean()
      .select("name slug isoCode coordinates coverImage zoomLevel travelledAt");

    return NextResponse.json({ ok: true, countries }, { status: 200 });
  } catch (err) {
    console.error("GET /api/maps/places error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}
