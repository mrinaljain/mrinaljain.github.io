
import Header from "@/components/Header";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { createPageMetadata } from "@/lib/seo";
import type { Video } from "@/types/video";
import type { Metadata } from "next";

async function getVideos(): Promise<Video[]> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) return [];

    try {
        const res = await fetch(`${baseUrl}/api/videos?limit=60`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return [];
        const data = await res.json();
        return (data?.videos ?? []) as Video[];
    } catch {
        return [];
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const videos = await getVideos();
    const count = videos.length;

    return createPageMetadata({
        title: "Videos",
        description:
            count > 0
                ? `Browse ${count} talks, tutorials, and recorded sessions by Mrinal Jain.`
                : "Browse talks, tutorials, and recorded sessions by Mrinal Jain.",
        path: "/videos",
        type: "website",
    });
}

export default async function VideosPage() {
    const videos = await getVideos();

    return (
        <>
            <Header />
            <hr />
            <main className="mx-auto max-w-6xl px-6 py-16">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">Videos</h1>
                    <p className="text-neutral-600 dark:text-neutral-300">
                        Talks, tutorials, and sessions — all in one place.
                    </p>
                </div>

                <div className="mt-10">
                    <VideoGrid videos={videos} />
                </div>
            </main>
        </>
    );
}
