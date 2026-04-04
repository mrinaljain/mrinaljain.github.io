import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { VideoModel } from "@/models/Video";
import { toSlug } from "@/utils/slugify";

export async function GET(req: Request) {

    try {
        await connectDB();

        const videos = await VideoModel.find().lean();
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

        const payload = await buildVideoPayload(body);
        const created = await VideoModel.create(payload);

        return NextResponse.json({ ok: true, video: created }, { status: 201 });
    } catch (err: any) {
        console.error("POST /api/videos error:", err);
        if (err?.statusCode) {
            return NextResponse.json({ ok: false, message: err.message }, { status: err.statusCode });
        }
        return NextResponse.json({ ok: false, message: "Failed to create video" }, { status: 500 });
    }
}

function badRequest(message: string) {
    return { message, statusCode: 400 };
}

function parseTags(tags: unknown): string[] {
    if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean);
    if (typeof tags === "string") return tags.split(",").map((t) => t.trim()).filter(Boolean);
    return [];
}

function parseDurationSec(body: Record<string, any>): number | undefined {
    const raw = typeof body.durationSec === "number" ? body.durationSec : Number(body.duration);
    if (!Number.isFinite(raw)) return undefined;
    return raw > 0 ? Math.floor(raw) : undefined;
}

function parseProvider(body: Record<string, any>) {
    const provider = body.provider;
    const providerId = body.providerId ? String(body.providerId).trim() : undefined;
    const mp4Url = body.mp4Url ? String(body.mp4Url).trim() : undefined;

    if (!provider) {
        throw badRequest("provider is required");
    }
    if (provider === "YOUTUBE" && !providerId) {
        throw badRequest("providerId is required for YOUTUBE");
    }
    if (provider === "SELF_HOSTED" && !mp4Url) {
        throw badRequest("mp4Url is required for SELF_HOSTED videos");
    }

    return { provider, providerId, mp4Url };
}

async function ensureProviderIsUnique(provider: string, providerId?: string) {
    if (!providerId) return;
    const duplicate = await VideoModel.findOne({ provider, providerId }).lean();
    if (duplicate) {
        throw { message: "Video already exists for this providerId", statusCode: 409 };
    }
}

async function makeUniqueSlug(baseSlug: string) {
    const seed = baseSlug || "video";
    let slug = seed;
    let counter = 1;
    while (await VideoModel.findOne({ slug }).lean()) {
        counter += 1;
        slug = `${seed}-${counter}`;
    }
    return slug;
}

async function buildVideoPayload(body: Record<string, any>) {
    const title = body?.title ? String(body.title).trim() : "";
    if (!title) {
        throw badRequest("title is required");
    }

    const thumbnailUrl = body.thumbnailUrl || body.thumbnail;
    if (!thumbnailUrl) {
        throw badRequest("thumbnailUrl is required");
    }

    const { provider, providerId, mp4Url } = parseProvider(body);
    await ensureProviderIsUnique(provider, providerId);

    const slug = await makeUniqueSlug(toSlug(title));

    return {
        title,
        slug,
        description: body.description ? String(body.description) : "",
        provider,
        providerId,
        mp4Url,
        sourceUrl: body.sourceUrl ? String(body.sourceUrl) : undefined,
        transcriptUrl: body.transcriptUrl ? String(body.transcriptUrl) : undefined,
        thumbnailUrl: String(thumbnailUrl),
        channelName: body.channelName ? String(body.channelName) : undefined,
        language: body.language ? String(body.language) : "en",
        tags: parseTags(body.tags),
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : undefined,
        durationSec: parseDurationSec(body),
        views: typeof body.views === "number" ? body.views : 0,
        status: body.status || "published",
        isIndexable: typeof body.isIndexable === "boolean" ? body.isIndexable : true,
    };
}
