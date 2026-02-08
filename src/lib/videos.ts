import { Video } from "@/types/video";
import { slugAndIdFrom } from "@/utils/slugify";


export async function fetchVideoById(id: string): Promise<Video | null> {
    // Replace with real fetch from your DB or API.
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/videos/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as Video;
}

// Given slugAndId (string from url), return {slug, id}
export function parseSlugAndId(slugAndId: string) {
    // id is everything after the last hyphen
    const idx = slugAndId.lastIndexOf("-");
    if (idx === -1) return { slug: slugAndId, id: "" };
    const slug = slugAndId.slice(0, idx);
    const id = slugAndId.slice(idx + 1);
    return { slug, id };
}

export function canonicalSlugAndId(video: Video) {
    return slugAndIdFrom(video.title, video.id);
}
