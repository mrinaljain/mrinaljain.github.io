import type { Video } from "@/types/video";
import { VideoCard } from "./VideoCard";

export function VideoGrid({ videos }: { videos: Video[] }) {
    if (!videos?.length) {
        return (
            <div className="rounded-2xl border p-10 text-center text-neutral-600">
                No videos found.
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
                <VideoCard key={video.shortId} video={video} />
            ))}
        </div>
    );
}
