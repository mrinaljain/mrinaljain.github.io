// src/app/videos/[slugAndId]/page.tsx
import { notFound, redirect } from "next/navigation";
import { fetchVideoById, parseSlugAndId, canonicalSlugAndId } from "@/lib/videos";
import { Metadata } from "next";
import VideoPlayer from "@/components/videos/VideoPlayer";

type ParamsShape = { slugAndId?: string };
type Props = { params: ParamsShape | Promise<ParamsShape> };

// Helper: unwrap params safely (await works for both Promises and non-Promises)
async function resolveParams(params: ParamsShape | Promise<ParamsShape> | undefined) {
    if (!params) return null;
    // awaiting a non-promise returns the same object; awaiting a promise resolves it.
    try {
        const p = await params as ParamsShape;
        if (!p || typeof p.slugAndId !== "string") return null;
        return p;
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolved = await resolveParams(params);
    if (!resolved) return { title: "Video not found" };

    const { slugAndId } = resolved;
    const parsed = parseSlugAndId(slugAndId ?? "");
    const { id } = parsed;
    if (!id) return { title: "Video not found" };

    const video = await fetchVideoById(id);
    if (!video) return { title: "Video not found" };

    const title = video.title;
    const description = video.description ?? "";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/videos/${canonicalSlugAndId(video)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: video.thumbnailUrl }],
            url,
            type: "video.other",
        },
        twitter: {
            card: "player",
            title,
            description,
            images: [video.thumbnailUrl],
        },
    };
}

export default async function VideoPage({ params }: Props) {
    const resolved = await resolveParams(params);
    if (!resolved) return notFound();

    const { slugAndId } = resolved;
    if (!slugAndId) return notFound();

    const { slug, id } = parseSlugAndId(slugAndId);
    if (!id) return notFound();

    const video = await fetchVideoById(id);
    if (!video) return notFound();

    const canonical = canonicalSlugAndId(video);
    if (canonical !== slugAndId) {
        // note: next/navigation.redirect issues a 307 in App Router.
        // If you require 301, use middleware or an API-edge approach.
        return redirect(`/videos/${canonical}`);
    }

    const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: [video.thumbnailUrl],
        ...(video.publishedAt ? { uploadDate: (new Date(video.publishedAt)).toISOString() } : {}),
        ...(video.durationSec ? { duration: `PT${video.durationSec}S` } : {}),
        ...(video.mp4Url ? { contentUrl: video.mp4Url } : {}),
        ...(video.provider === "YOUTUBE" && video.providerId ? { embedUrl: `https://www.youtube.com/embed/${video.providerId}` } : {}),
    };

    return (
        <>
            <section className="w-full bg-black">
                <div className="relative w-full aspect-video">
                    <VideoPlayer
                        provider={video.provider}
                        providerId={video.providerId}
                        mp4Url={video.mp4Url}
                        poster={video.thumbnailUrl}
                        title={video.title}
                    />
                </div>
            </section>
            <main className="max-w-3xl p-6 ">
                <h1 className="text-2xl font-bold mb-4 ">{video.title}</h1>



                <section className="mt-4">
                    <h2 className="text-lg font-semibold">Description</h2>
                    <p className="mt-2">{video.description}</p>
                </section>


            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
