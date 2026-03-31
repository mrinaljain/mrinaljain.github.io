import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { Popup } from "@/models/Popup";

/**
 * POST /api/popups/[id]/analytics
 * Track popup analytics (impressions, clicks, dismissals)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const { eventType } = await request.json();

    if (!eventType || !["impression", "click", "dismissal"].includes(eventType)) {
      return NextResponse.json(
        { error: "Invalid eventType. Must be: impression, click, or dismissal" },
        { status: 400 }
      );
    }

    const popup = await Popup.findOne({ id });

    if (!popup) {
      return NextResponse.json(
        { error: "Popup not found" },
        { status: 404 }
      );
    }

    // Increment analytics based on event type
    switch (eventType) {
      case "impression":
        popup.analytics.impressions += 1;
        break;
      case "click":
        popup.analytics.clicks += 1;
        break;
      case "dismissal":
        popup.analytics.dismissals += 1;
        break;
    }

    await popup.save();

    return NextResponse.json(
      {
        message: `${eventType} tracked successfully`,
        analytics: popup.analytics,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error tracking analytics:", error);
    return NextResponse.json(
      { error: "Failed to track analytics" },
      { status: 500 }
    );
  }
}
