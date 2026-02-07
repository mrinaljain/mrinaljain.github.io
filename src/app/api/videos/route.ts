import { NextResponse } from "next/server";

import connectDB from "@/src/lib/db/mongodb";
import { VideoModel } from "@/src/models/Video";

export async function GET(req: Request) {

    try {
        // TODO: Move connect DB to a common place
        await connectDB();
        const { searchParams } = new URL(req.url);
        const q = searchParams.get("q")?.trim();
        const tag = searchParams.get("tag")?.trim();
        const limit = Number(searchParams.get("limit") || 24);

        const filter: Record<string, any> = {};
        if (q) filter.title = { $regex: q, $options: "i" };
        if (tag) filter.tags = tag;

        const videos = await VideoModel.find(filter)
            .sort({ publishedAt: -1, createdAt: -1 })
            .limit(Math.min(limit, 100))
            .lean();

        return NextResponse.json({ ok: true, videos }, { status: 200 });
    } catch (err) {
        console.error("GET /api/videos error:", err || err);
        return NextResponse.json(
            { ok: false, error: err || "Failed to fetch videos" },
            { status: 500 }
        );
    }

}

// TODO: This api should only work with credentials of admin
export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        // Minimal validation (you can add zod later)
        if (!body?.title || !body?.youtubeId || !body?.thumbnailUrl) {
            return NextResponse.json(
                { ok: false, message: "title, youtubeId, thumbnailUrl are required" },
                { status: 400 }
            );
        }

        const created = await VideoModel.create({
            title: body.title,
            description: body.description,
            youtubeId: body.youtubeId,
            thumbnailUrl: body.thumbnailUrl,
            channelName: body.channelName,
            tags: body.tags || [],
            publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
            durationSec: body.durationSec,
            views: body.views,
        });

        return NextResponse.json({ ok: true, video: created }, { status: 201 });
    } catch (err: any) {
        console.error("POST /api/videos error:", err);
        // Handle duplicate youtubeId
        if (err?.code === 11000) {
            return NextResponse.json(
                { ok: false, message: "Video already exists (duplicate youtubeId)" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { ok: false, message: "Failed to create video" },
            { status: 500 }
        );
    }
}