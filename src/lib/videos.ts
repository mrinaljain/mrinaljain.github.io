import { Video } from "@/types/video";
import { toSlug } from "@/utils/slugify";


export async function fetchVideoBySlug(slug: string): Promise<Video | null> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!baseUrl) return null;

    try {
        const res = await fetch(`${baseUrl}/api/videos/${slug}`, { cache: "no-store" });
        if (!res.ok) return null;
        return (await res.json()) as Video;
    } catch {
        return null;
    }
}

export function canonicalSlug(video: Video) {
    return video.slug || toSlug(video.title);
}
