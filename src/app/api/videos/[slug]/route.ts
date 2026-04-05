import { VideoModel } from "@/models/Video";
import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";

type ParamsPromise = Promise<{ slug: string }>;


export async function GET(_req: Request, context: { params: ParamsPromise }) {
    await connectDB();
    const { slug } = await context.params;
    if (!slug) {
        return NextResponse.json({ message: "Missing slug" }, { status: 400 });
    }

    const video = await VideoModel.findOne({
        slug: slug
    }).lean();

    if (!video) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(video, { status: 200 });
}
