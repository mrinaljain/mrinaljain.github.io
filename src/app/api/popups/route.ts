import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { Popup } from "@/models/Popup";
import { PopupConfig, PopupResponse } from "@/types/popup";

/**
 * GET /api/popups?page=/
 * Fetch active popup for a specific page
 * Returns popup data if available and active for the requested page
 */
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "/";

    const now = new Date();

    // Find active popup for the requested page
    const popup = await Popup.findOne({
      isActive: true,
      targetPages: page,
      $and: [
        {
          $or: [
            { startDate: { $exists: false } },
            { startDate: { $lte: now } },
          ],
        },
        {
          $or: [
            { endDate: { $exists: false } },
            { endDate: { $gte: now } },
          ],
        },
      ],
    }).sort({ priority: -1 });

    const response: PopupResponse = {
      popup: popup ? (popup.toObject() as PopupConfig) : null,
      showPopup: !!popup,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching popup:", error);
    return NextResponse.json(
      { error: "Failed to fetch popup" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/popups
 * Create a new popup (admin only)
 */
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const data = await request.json();

    // Validate required fields
    if (!data.id || !data.content?.title) {
      return NextResponse.json(
        { error: "Missing required fields: id, content.title" },
        { status: 400 }
      );
    }

    const newPopup = new Popup({
      id: data.id,
      content: data.content,
      isActive: data.isActive ?? true,
      displayFrequency: data.displayFrequency || "once",
      dismissibleAfter: data.dismissibleAfter,
      displayDelay: data.displayDelay || 0,
      targetPages: data.targetPages || ["/"],
      startDate: data.startDate,
      endDate: data.endDate,
      priority: data.priority || 0,
      customCss: data.customCss,
      analytics: {
        impressions: 0,
        clicks: 0,
        dismissals: 0,
      },
    });

    await newPopup.save();

    return NextResponse.json(
      {
        message: "Popup created successfully",
        popup: newPopup.toObject(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating popup:", error);
    return NextResponse.json(
      { error: "Failed to create popup" },
      { status: 500 }
    );
  }
}
