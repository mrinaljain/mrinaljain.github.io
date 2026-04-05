import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CityModel } from "@/models/City";

/** GET /api/maps/cities/[slug] — fetches single city with photos */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const city = await CityModel.findOne({ slug }).lean();
    if (!city) {
      return NextResponse.json(
        { ok: false, error: "City not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, city }, { status: 200 });
  } catch (err) {
    console.error("GET /api/maps/cities/[slug] error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch city" },
      { status: 500 }
    );
  }
}
