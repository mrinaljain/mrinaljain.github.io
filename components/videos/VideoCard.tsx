import Image from "next/image";
import type { Video } from "@/types/video";

export function VideoCard({ video }: { video: Video }) {
    const href = `https://www.youtube.com/watch?v=${video.youtubeId}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border overflow-hidden hover:shadow-sm transition"
        >
            <div className="relative aspect-video bg-neutral-100">
                <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                />
            </div>

            <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:underline line-clamp-2">
                    {video.title}
                </h3>

                {video.channelName && (
                    <p className="mt-1 text-sm text-neutral-600">{video.channelName}</p>
                )}

                {!!video.tags?.length && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {video.tags.slice(0, 4).map((t) => (
                            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}
