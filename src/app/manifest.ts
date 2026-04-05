import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Mrinal Jain",
      short_name: "Mrinal",
      description:
         "Tech Consultant, Developer, and Speaker with expertise in Flutter, React, and SaaS applications.",
      id: "/",
      start_url: "/",
      scope: "/",
      display: "standalone",
      orientation: "portrait",
      background_color: "#bc83d7",
      theme_color: "#c9904e",
      categories: ["portfolio", "education", "technology"],
      icons: [
         {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
         },
         {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
         },
         {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
         },
      ],
   };
}