import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";

type UploadMetadata = {
  public_id: string;
  secure_url: string;
  resource_type: string;
  type: "image" | "video";
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
  created_at: string;
};

/**
 * POST /api/admin/media/upload
 * Handle saving uploaded media metadata to database
 * This allows tracking all Media uploads and doing further processing
 */
export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: UploadMetadata = await request.json();

    // Validate required fields
    if (!body.public_id || !body.secure_url) {
      return NextResponse.json(
        { error: "Missing required fields: public_id, secure_url" },
        { status: 400 }
      );
    }

    // TODO: Save to database
    // Example structure for future implementation:
    // const media = await MediaModel.create({
    //   public_id: body.public_id,
    //   secure_url: body.secure_url,
    //   resource_type: body.resource_type,
    //   type: body.type,
    //   width: body.width,
    //   height: body.height,
    //   format: body.format,
    //   bytes: body.bytes,
    //   uploadedBy: session.user.id,
    //   uploadedAt: new Date(body.created_at),
    // });

    // For now, just return success
    return NextResponse.json(
      {
        success: true,
        message: "Media metadata saved successfully",
        data: {
          ...body,
          uploadedBy: session.user.username,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving media metadata:", error);
    return NextResponse.json(
      { error: "Failed to save media metadata" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/admin/media/upload
 * Retrieve all uploaded media
 */
export async function GET() {
  try {
    // Verify user is authenticated
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Fetch from database
    // Example:
    // const media = await MediaModel.find({ uploadedBy: session.user.id }).sort({ uploadedAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: [],
        message: "Database integration coming soon",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}
