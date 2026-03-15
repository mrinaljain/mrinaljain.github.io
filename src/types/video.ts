export type Video = {
    // id: string;
    title: string;
    shortId: string;
    slug: string;
    description?: string;
    thumbnailUrl: string;
    channelName?: string;
    tags: string[];
    publishedAt?: string;    // ISO
    durationSec?: number;
    provider?: "SELF_HOSTED" | "YOUTUBE" | "VIMEO";
    providerId?: string;
    mp4Url?: string;
    views?: number;
};
