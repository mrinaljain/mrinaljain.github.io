import { NextResponse } from "next/server";
import * as mongoose from "mongoose";
import dbConnect from "@/app/lib/db";
import Video from "@/app/models/Video";

export async function GET() {

    try {
        await dbConnect();
        const videos = await Video.find({})
            .sort({ createdAt: -1 })
            .lean();
        return NextResponse.json({ ok: true, videos }, { status: 200 });
    } catch (err: any) {
        console.error("GET /api/videos error:", err?.message || err);
        return NextResponse.json(
            { ok: false, error: err?.message || "Failed to fetch videos" },
            { status: 500 }
        );
    }

}