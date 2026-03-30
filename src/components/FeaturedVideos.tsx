
import { Video } from "@/types/video";
import Link from "next/link";
import { VideoCard } from "./videos/VideoCard";

async function getVideos(): Promise<Video[]> {
   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
   const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";
   if (!baseUrl || isBuildPhase) return [];

   try {
      const res = await fetch(`${baseUrl}/api/videos`, {
         next: { revalidate: 60 },
         signal: AbortSignal.timeout(4000),
      });

      if (!res.ok) return [];
      const data = await res.json();
      return (data?.videos ?? []) as Video[];
   } catch {
      return [];
   }
}
export default async function FeaturedVideos() {

   const videos = await getVideos();

   return (
      <section className="py-12">
         <div className="container mx-auto px-6">

            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">

               <div className="flex items-center gap-3">
                  <span className="h-6 w-1.5 bg-black rounded-full"></span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                     Featured Videos
                  </h2>
               </div>

               <Link
                  href="/videos"
                  className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
               >
                  View All
                  <svg
                     className="w-4 h-4"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     stroke="currentColor"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
               </Link>

            </div>
            {/* Mobile Slider */}
            <div className="flex gap-6 overflow-x-auto  pb-4 md:hidden scrollbar-hide w-[90vw]">
               {videos.map((video) => (
                  <div
                     key={video.shortId}
                     className="min-w-[85%] snap-start flex-shrink-0"
                  >
                     <VideoCard video={video} />
                  </div>
               ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-8">
               {videos.map((video) => (
                  <VideoCard key={video.shortId} video={video} />
               ))}
            </div>

         </div>
      </section>
   );
}
