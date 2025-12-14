"use client";

import Script from "next/script";
import Link from "next/link";
import {useEffect} from "react";
declare global {
    interface Window {
        twttr?: never;
    }
}

export default function TwitterCard() {
    useEffect(() => {
        if (window.twttr?.widgets) {
            window.twttr.widgets.load();
        }
    }, []);

    return (
        <div className="w-full max-w-md mx-auto">
            <Link
                className="twitter-timeline"
                data-height="500"
                data-theme="dark"
                data-chrome="noheader nofooter transparent"
                href="https://twitter.com/_mrinaljain"
            >
                Tweets by @mrinaljain
            </Link>

            <Script
                src="https://platform.twitter.com/widgets.js"
                strategy="afterInteractive"
                onLoad={() => window.twttr?.widgets?.load()}
            />
        </div>
    );
}