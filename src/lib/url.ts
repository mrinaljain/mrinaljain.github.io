// src/lib/url.ts
export function getBaseUrl() {

    // Custom prod domain
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }

    // Local dev fallback
    return "http://localhost:3000";
}
