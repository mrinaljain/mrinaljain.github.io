export type Video = {
    _id: string;
    title: string;
    description?: string;
    youtubeId: string;       // store just the YouTube ID (clean)
    thumbnailUrl: string;
    channelName?: string;
    tags: string[];
    publishedAt?: string;    // ISO
    durationSec?: number;
    views?: number;
    createdAt?: string;
    updatedAt?: string;
};
