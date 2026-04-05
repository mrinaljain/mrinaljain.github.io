import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { VideoModel } from "@/models/Video";
import { toSlug } from "@/utils/slugify";

type VideoProvider = "YOUTUBE" | "SELF_HOSTED" | "VIMEO";
type VideoStatus = "draft" | "published" | "unlisted";

type VideoPayloadInput = {
    title?: unknown;
    description?: unknown;
    thumbnailUrl?: unknown;
    thumbnail?: unknown;
    provider?: unknown;
    providerId?: unknown;
    mp4Url?: unknown;
    sourceUrl?: unknown;
    transcriptUrl?: unknown;
    channelName?: unknown;
    language?: unknown;
    tags?: unknown;
    publishedAt?: unknown;
    durationSec?: unknown;
    duration?: unknown;
    views?: unknown;
    status?: unknown;
    isIndexable?: unknown;
};

class RequestError extends Error {
    statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.name = "RequestError";
        this.statusCode = statusCode;
    }
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function isRequestError(error: unknown): error is RequestError {
    return error instanceof RequestError;
}

function asTrimmedString(value: unknown): string | undefined {
    if (typeof value !== "string") return undefined;
    const trimmed = value.trim();
    return trimmed ? trimmed : undefined;
}

function badRequest(message: string): never {
    throw new RequestError(message, 400);
}

export async function GET() {
    try {
        await connectDB();

        const videos = await VideoModel.find().lean();
        return NextResponse.json({ ok: true, videos }, { status: 200 });
    } catch (error) {
        console.error("GET /api/videos error:", error);
        return NextResponse.json(
            { ok: false, error: "Failed to fetch videos" },
            { status: 500 }
        );
    }
}

// TODO: This api should only work with credentials of admin
export async function POST(req: Request) {
    try {
        await connectDB();
        const rawBody: unknown = await req.json();

        if (!isRecord(rawBody)) {
            badRequest("request body must be an object");
        }

        const payload = await buildVideoPayload(rawBody as VideoPayloadInput);
        const created = await VideoModel.create(payload);

        return NextResponse.json({ ok: true, video: created }, { status: 201 });
    } catch (error) {
        console.error("POST /api/videos error:", error);
        if (isRequestError(error)) {
            return NextResponse.json({ ok: false, message: error.message }, { status: error.statusCode });
        }
        return NextResponse.json({ ok: false, message: "Failed to create video" }, { status: 500 });
    }
}

function parseTags(tags: unknown): string[] {
    if (Array.isArray(tags)) return tags.map((tag) => String(tag).trim()).filter(Boolean);
    if (typeof tags === "string") return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
    return [];
}

function parseDurationSec(body: VideoPayloadInput): number | undefined {
    const rawDuration = typeof body.durationSec === "number" ? body.durationSec : Number(body.duration);
    if (!Number.isFinite(rawDuration)) return undefined;
    return rawDuration > 0 ? Math.floor(rawDuration) : undefined;
}

function parseProvider(body: VideoPayloadInput) {
    const provider = body.provider;
    const providerId = asTrimmedString(body.providerId);
    const mp4Url = asTrimmedString(body.mp4Url);

    if (provider !== "YOUTUBE" && provider !== "SELF_HOSTED" && provider !== "VIMEO") {
        badRequest("provider is required");
    }
    if (provider === "YOUTUBE" && !providerId) {
        badRequest("providerId is required for YOUTUBE");
    }
    if (provider === "SELF_HOSTED" && !mp4Url) {
        badRequest("mp4Url is required for SELF_HOSTED videos");
    }

    return { provider, providerId, mp4Url } as {
        provider: VideoProvider;
        providerId?: string;
        mp4Url?: string;
    };
}

function parseStatus(status: unknown): VideoStatus {
    return status === "draft" || status === "published" || status === "unlisted"
        ? status
        : "published";
}

async function ensureProviderIsUnique(provider: VideoProvider, providerId?: string) {
    if (!providerId) return;
    const duplicate = await VideoModel.findOne({ provider, providerId }).lean();
    if (duplicate) {
        throw new RequestError("Video already exists for this providerId", 409);
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

async function buildVideoPayload(body: VideoPayloadInput) {
    const title = asTrimmedString(body.title) ?? "";
    if (!title) {
        badRequest("title is required");
    }

    const thumbnailUrl = asTrimmedString(body.thumbnailUrl) ?? asTrimmedString(body.thumbnail);
    if (!thumbnailUrl) {
        badRequest("thumbnailUrl is required");
    }

    const { provider, providerId, mp4Url } = parseProvider(body);
    await ensureProviderIsUnique(provider, providerId);

    const slug = await makeUniqueSlug(toSlug(title));
    const publishedAt = asTrimmedString(body.publishedAt);
    const views = typeof body.views === "number" ? body.views : Number(body.views);

    return {
        title,
        slug,
        description: typeof body.description === "string" ? body.description : "",
        provider,
        providerId,
        mp4Url,
        sourceUrl: asTrimmedString(body.sourceUrl),
        transcriptUrl: asTrimmedString(body.transcriptUrl),
        thumbnailUrl,
        channelName: asTrimmedString(body.channelName),
        language: asTrimmedString(body.language) ?? "en",
        tags: parseTags(body.tags),
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
        durationSec: parseDurationSec(body),
        views: Number.isFinite(views) ? views : 0,
        status: parseStatus(body.status),
        isIndexable: typeof body.isIndexable === "boolean" ? body.isIndexable : true,
    };
}
