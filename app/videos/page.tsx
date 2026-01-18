import { VideoGrid } from "@/components/videos/VideoGrid";
import type { Video } from "@/types/video";

async function getVideos(): Promise<Video[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/videos?limit=60`, {
        // If your videos change often, use revalidate:
        next: { revalidate: 60 }, // seconds
    });

    if (!res.ok) throw new Error("Failed to load videos");
    const data = await res.json();
    return data.videos as Video[];
}

export default async function VideosPage() {
    const videos = await getVideos();

    return (
        <main className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">Videos</h1>
                <p className="text-neutral-600">
                    Talks, tutorials, and sessions — all in one place.
                </p>
            </div>

            <div className="mt-10">
                <VideoGrid videos={videos} />
            </div>
        </main>
    );
}
