import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { Popup } from "@/models/Popup";

/**
 * GET /api/popups/[id]
 * Get a specific popup by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const popup = await Popup.findOne({ id });

    if (!popup) {
      return NextResponse.json(
        { error: "Popup not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(popup.toObject(), { status: 200 });
  } catch (error) {
    console.error("Error fetching popup:", error);
    return NextResponse.json(
      { error: "Failed to fetch popup" },
      { status: 500 }
    );
  }
}

/**
 * PUT/PATCH /api/popups/[id]
 * Update a popup by ID
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const data = await request.json();

    const updatedPopup = await Popup.findOneAndUpdate(
      { id },
      data,
      { new: true, runValidators: true }
    );

    if (!updatedPopup) {
      return NextResponse.json(
        { error: "Popup not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Popup updated successfully",
        popup: updatedPopup.toObject(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating popup:", error);
    return NextResponse.json(
      { error: "Failed to update popup" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/popups/[id]
 * Delete a popup by ID
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedPopup = await Popup.findOneAndDelete({ id });

    if (!deletedPopup) {
      return NextResponse.json(
        { error: "Popup not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Popup deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting popup:", error);
    return NextResponse.json(
      { error: "Failed to delete popup" },
      { status: 500 }
    );
  }
}
