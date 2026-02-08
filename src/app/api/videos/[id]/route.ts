import { NextResponse } from "next/server";

export async function GET() {
    // const { id } = params;

    // demo dataset — replace with DB call
    const demo = {
        "7f3k2c": {
            id: "7f3k2c",
            shortId: "7f3k2c",
            slug: "build-tv-apps-with-flutter-mrinal-jain-fluttercon-usa",
            title: "Build Spectacular TV Apps with Flutter - Mrinal Jain | Fluttercon USA",
            description: "Spoke at FlutterCon USA 2025 in NYC on “Build Spectacular TV Apps with Flutter”, showcasing how Flutter powers beautiful experiences on Smart TVs, Android TV, and Fire TV",
            thumbnailUrl: "https://img.youtube.com/vi/CRuOTEdB-hM/sddefault.jpg",
            durationSeconds: 1320,
            uploadDate: "2026-01-26T10:00:00Z",
            provider: "YOUTUBE",
            providerId: "CRuOTEdB-hM",

        },
        "a91bq0": {
            id: "a91bq0",
            title: "Learn React Hooks in 10 minutes",
            description: "Quick guide to useState, useEffect, and custom hooks.",
            thumbnailUrl: "https://picsum.photos/seed/a91bq0/1280/720",
            durationSeconds: 600,
            uploadDate: "2025-12-10T08:00:00Z",
            provider: "YOUTUBE",
            providerId: "dQw4w9WgXcQ"
        }
    };

    const data = demo["7f3k2c"];
    if (!data) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(data);
}
