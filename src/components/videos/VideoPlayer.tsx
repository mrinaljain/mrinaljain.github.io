import React from "react";

type Props = {
    provider: unknown;
    providerId?: string;
    mp4Url?: string;
    poster?: string;
    title?: string;
};

export default function VideoPlayer({ provider, providerId, mp4Url, poster, title }: Props) {
    if (provider === "YOUTUBE" && providerId) {
        const src = `https://www.youtube.com/embed/${providerId}?controls=1&rel=0&modestbranding=1&showinfo=0&playsinline=1
&fs=1`;
        return (
            <div className="w-full aspect-video">
                <iframe
                    title={title}
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className=" rounded absolute inset-0 w-full h-full"
                />
            </div>
        );
    }

    // Default to self-hosted <video>
    return (
        <video controls poster={poster} className="w-full rounded max-h-[70vh]">
            {mp4Url && <source src={mp4Url} type="video/mp4" />}
            Your browser does not support the video tag.
        </video>
    );
}
