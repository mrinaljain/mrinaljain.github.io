import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ['i.ytimg.com', 'img.youtube.com'], // Allow images from YouTube
  },
};

export default nextConfig;
