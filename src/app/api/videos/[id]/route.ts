import { VideoModel } from "@/models/Video";
import { NextResponse } from "next/server";

type ParamsPromise = Promise<{ id: string }>;


export async function GET(_req: Request, context: { params: ParamsPromise }) {
    const { id } = await context.params;
    if (!id) {
        return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }
    const video = await VideoModel.findOne({
        $or: [
            { shortId: id },
            { slug: id },
            { providerId: id },
            { _id: id },
        ],
    }).lean();

    if (!video) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(video, { status: 200 });
}
