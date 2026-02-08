import { NextResponse } from "next/server";
import crypto from "crypto";
import connectDB from "@/lib/db/mongodb";
import { VideoModel } from "@/models/Video";
import { toSlug } from "@/utils/slugify";

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

        // Basic validations
        if (!body?.title) {
            return NextResponse.json({ ok: false, message: "title is required" }, { status: 400 });
        }

        // Determine provider and providerId (support legacy `youtubeId`)
        const provider = (body.provider || (body.youtubeId ? "YOUTUBE" : (body.mp4Url ? "SELF_HOSTED" : null)))?.toString().toUpperCase();
        const providerId = body.providerId || body.youtubeId || null;
        const mp4Url = body.mp4Url || null;

        // Require at least one playable source
        if (!provider) {
            return NextResponse.json(
                { ok: false, message: "provider (YOUTUBE/SELF_HOSTED/VIMEO) or youtubeId/mp4Url is required" },
                { status: 400 }
            );
        }

        if (provider === "YOUTUBE" && !providerId) {
            return NextResponse.json({ ok: false, message: "providerId (youtube id) is required for YOUTUBE provider" }, { status: 400 });
        }

        if (provider === "SELF_HOSTED" && !mp4Url) {
            return NextResponse.json({ ok: false, message: "mp4Url is required for SELF_HOSTED provider" }, { status: 400 });
        }

        // Prevent duplicate provider+providerId (e.g., same YouTube id twice)
        if (providerId) {
            const dup = await VideoModel.findOne({ provider: provider, providerId: providerId }).lean();
            if (dup) {
                return NextResponse.json(
                    { ok: false, message: "Video already exists for this providerId" },
                    { status: 409 }
                );
            }
        }

        // Generate shortId (unique) and slug (from title, ensure unique-ish)
        const shortId = await makeUniqueShortId();
        const baseSlug = toSlug(body.title);
        const slug = await makeUniqueSlug(baseSlug);

        // Build DB object
        const data = {
            title: body.title,
            slug,
            shortId,
            description: body.description || "",
            provider,
            providerId: providerId || undefined,
            mp4Url: mp4Url || undefined,
            thumbnailUrl: body.thumbnailUrl || body.thumbnail || "", // require thumbnail later maybe
            channelName: body.channelName || undefined,
            tags: Array.isArray(body.tags) ? body.tags : (body.tags ? String(body.tags).split(",").map((t: string) => t.trim()) : []),
            publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
            durationSec: typeof body.durationSec === "number" ? body.durationSec : body.duration ? Number(body.duration) : undefined,
            views: typeof body.views === "number" ? body.views : 0,
            status: body.status || "published",
            isIndexable: typeof body.isIndexable === "boolean" ? body.isIndexable : true,
        };

        // Minimal required thumbnail check (you had this required previously)
        if (!data.thumbnailUrl) {
            return NextResponse.json({ ok: false, message: "thumbnailUrl is required" }, { status: 400 });
        }

        const created = await VideoModel.create(data);

        return NextResponse.json({ ok: true, video: created }, { status: 201 });
    } catch (err: any) {
        console.error("POST /api/videos error:", err);

        // Duplicate key handling (unique shortId or other unique indexes)
        if (err?.code === 11000) {
            // Inspect which key caused duplicate (helpful message)
            const key = err?.keyValue ? Object.keys(err.keyValue)[0] : "duplicate key";
            return NextResponse.json(
                { ok: false, message: `Duplicate key error: ${key}` },
                { status: 409 }
            );
        }

        return NextResponse.json({ ok: false, message: "Failed to create video" }, { status: 500 });
    }
}

function generateShortId(len = 6) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const bytes = crypto.randomBytes(len);
    let id = "";
    for (let i = 0; i < len; i++) {
        id += chars[bytes[i] % chars.length];
    }
    return id;
}

async function makeUniqueShortId(maxAttempts = 5) {
    for (let i = 0; i < maxAttempts; i++) {
        const candidate = generateShortId();
        const exists = await VideoModel.findOne({ shortId: candidate }).lean();
        if (!exists) return candidate;
    }
    throw new Error("Failed to generate unique shortId");
}

async function makeUniqueSlug(baseSlug: string) {
    // Slug uniqueness is not strictly required because we use shortId in URL,
    // but it's nicer to avoid identical slugs for readability.
    let slug = baseSlug;
    let counter = 1;
    while (await VideoModel.findOne({ slug }).lean()) {
        counter += 1;
        slug = `${baseSlug}-${counter}`;
    }
    return slug;
}
