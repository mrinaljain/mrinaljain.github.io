export type Video = {
    title: string;
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
    language?: string;
    transcriptUrl?: string;
    sourceUrl?: string;
};
