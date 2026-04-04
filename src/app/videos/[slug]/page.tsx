import { notFound, redirect } from "next/navigation";
import { fetchVideoBySlug, canonicalSlug } from "@/lib/videos";
import { Metadata } from "next";
import VideoPlayer from "@/components/videos/VideoPlayer";
import Link from "next/link";

type ParamsShape = { slug?: string };
type Props = { params: ParamsShape | Promise<ParamsShape> };

// Helper: unwrap params safely (await works for both Promises and non-Promises)
async function resolveParams(params: ParamsShape | Promise<ParamsShape> | undefined) {
    if (!params) return null;
    // awaiting a non-promise returns the same object; awaiting a promise resolves it.
    try {
        const p = await params as ParamsShape;
        if (!p || typeof p.slug !== "string") return null;
        return p;
    } catch {
        return null;
    }
}

function stripLegacyIdSuffix(slug: string): string {
    const idx = slug.lastIndexOf("-");
    if (idx === -1) return slug;

    const maybeId = slug.slice(idx + 1);
    if (/^[a-zA-Z0-9]{6}$/.test(maybeId)) {
        return slug.slice(0, idx);
    }
    return slug;
}

function formatDate(input?: string) {
    if (!input) return "Date unavailable";
    const date = new Date(input);
    if (Number.isNaN(date.getTime())) return "Date unavailable";
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function formatDuration(seconds?: number) {
    if (!seconds || seconds <= 0) return "Duration unavailable";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolved = await resolveParams(params);
    if (!resolved) return { title: "Video not found" };

    const rawSlug = resolved.slug;
    if (!rawSlug) return { title: "Video not found" };

    const video = await fetchVideoBySlug(rawSlug) ?? await fetchVideoBySlug(stripLegacyIdSuffix(rawSlug));
    if (!video) return { title: "Video not found" };

    const title = video.title;
    const description = video.description ?? "";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/videos/${canonicalSlug(video)}`;

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

    const { slug } = resolved;
    if (!slug) return notFound();

    const video = await fetchVideoBySlug(slug) ?? await fetchVideoBySlug(stripLegacyIdSuffix(slug));
    if (!video) return notFound();

    const canonical = canonicalSlug(video);
    if (canonical !== slug) {
        // note: next/navigation.redirect issues a 307 in App Router.
        // If you require 301, use middleware or an API-edge approach.
        return redirect(`/videos/${canonical}`);
    }

    const watchOnProviderUrl =
        video.provider === "YOUTUBE" && video.providerId
            ? `https://www.youtube.com/watch?v=${video.providerId}`
            : video.sourceUrl;

    const publishedDate = formatDate(video.publishedAt);
    const durationLabel = formatDuration(video.durationSec);
    const storyIntro =
        video.description?.trim() ||
        `In this session, ${video.title} explores practical ideas, real-world tradeoffs, and lessons that can be applied immediately.`;

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
            <div className="min-h-screen bg-linear-to-b from-neutral-100 via-white to-neutral-100 text-neutral-900">
                <header className="border-b border-neutral-200 bg-white/85 backdrop-blur">
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
                        <Link href="/" className="text-base font-semibold tracking-tight text-neutral-900">
                            Mrinal Jain
                        </Link>
                        <nav className="flex items-center gap-5 text-sm text-neutral-600">
                            <Link href="/videos" className="hover:text-neutral-900">All videos</Link>
                            <Link href="/talk" className="hover:text-neutral-900">Talks</Link>
                            <Link href="/post" className="hover:text-neutral-900">Posts</Link>
                        </nav>
                    </div>
                </header>

                <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:pt-10">
                    <article>
                        <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700">
                            STREAM SESSION
                        </p>
                        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                            {video.title}
                        </h1>

                        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
                            <span className="rounded-full bg-neutral-200 px-3 py-1">{video.channelName || "Mrinal Jain"}</span>
                            <span className="rounded-full bg-neutral-200 px-3 py-1">{publishedDate}</span>
                            <span className="rounded-full bg-neutral-200 px-3 py-1">{durationLabel}</span>
                            {video.provider && (
                                <span className="rounded-full bg-neutral-200 px-3 py-1">{video.provider.replace("_", " ")}</span>
                            )}
                        </div>

                        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                            <div className="space-y-7">
                                <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
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

                                <section className="flex flex-wrap gap-3">
                                    <Link
                                        href="/videos"
                                        className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                                    >
                                        Back to videos
                                    </Link>
                                    {watchOnProviderUrl && (
                                        <Link
                                            href={watchOnProviderUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
                                        >
                                            Watch on source
                                        </Link>
                                    )}
                                    {video.transcriptUrl && (
                                        <Link
                                            href={video.transcriptUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                                        >
                                            Open transcript
                                        </Link>
                                    )}
                                </section>

                                <section className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-8">
                                    <h2 className="text-xl font-semibold tracking-tight">Story</h2>
                                    <p className="mt-3 text-base leading-7 text-neutral-700">{storyIntro}</p>

                                    {video.description && (
                                        <div className="mt-6 border-t border-neutral-200 pt-6">
                                            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Detailed notes</h3>
                                            <p className="mt-3 whitespace-pre-line text-base leading-7 text-neutral-700">
                                                {video.description}
                                            </p>
                                        </div>
                                    )}
                                </section>
                            </div>

                            <aside className="h-fit lg:sticky lg:top-8">
                                <div className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6">
                                    <section>
                                        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Video details</h2>
                                        <dl className="mt-4 space-y-3 text-sm">
                                            <div className="flex items-start justify-between gap-3 border-b border-neutral-100 pb-3">
                                                <dt className="text-neutral-500">Published</dt>
                                                <dd className="text-right font-medium text-neutral-800">{publishedDate}</dd>
                                            </div>
                                            <div className="flex items-start justify-between gap-3 border-b border-neutral-100 pb-3">
                                                <dt className="text-neutral-500">Duration</dt>
                                                <dd className="text-right font-medium text-neutral-800">{durationLabel}</dd>
                                            </div>
                                            <div className="flex items-start justify-between gap-3 border-b border-neutral-100 pb-3">
                                                <dt className="text-neutral-500">Language</dt>
                                                <dd className="text-right font-medium text-neutral-800">{video.language || "en"}</dd>
                                            </div>
                                            <div className="flex items-start justify-between gap-3">
                                                <dt className="text-neutral-500">Provider</dt>
                                                <dd className="text-right font-medium text-neutral-800">{video.provider?.replace("_", " ") || "Unknown"}</dd>
                                            </div>
                                        </dl>
                                    </section>

                                    {!!video.tags?.length && (
                                        <section>
                                            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Topics</h3>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {video.tags.map((tag) => (
                                                    <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </div>
                            </aside>
                        </div>
                    </article>
                </main>

                <footer className="border-t border-neutral-200 bg-white">
                    <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
                        <p>Built for thoughtful watching and learning.</p>
                        <div className="flex items-center gap-4">
                            <Link href="/videos" className="hover:text-neutral-900">Browse videos</Link>
                            <Link href="/talk" className="hover:text-neutral-900">Talks</Link>
                            <Link href="/post" className="hover:text-neutral-900">Posts</Link>
                        </div>
                    </div>
                </footer>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
