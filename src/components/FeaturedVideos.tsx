
import { Video } from "@/types/video";
import Image from "next/image";
import Link from "next/link";

async function getVideos(): Promise<Video[]> {
   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
   if (!baseUrl) return [];

   try {
      const res = await fetch(`${baseUrl}/api/videos`);

      if (!res.ok) return [];
      const data = await res.json();
      return (data?.videos ?? []) as Video[];
   } catch {
      return [];
   }
}

function FeaturedSlimVideoCard({ video }: { video: Video }) {
   return (
      <Link
         href={`/videos/${video.slug}`}
         className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm"
      >
         <div className="relative aspect-video bg-neutral-100">
            <Image
               src={video.thumbnailUrl}
               alt={video.title}
               fill
               className="object-cover"
               sizes="(max-width: 640px) 80vw, 340px"
            />
         </div>

         <div className="px-3 py-2.5">
            <h3 className="line-clamp-2 text-sm font-medium text-neutral-900 group-hover:underline sm:text-base">
               {video.title}
            </h3>
         </div>
      </Link>
   );
}

export default async function FeaturedVideos() {

   const videos = await getVideos();
   const shouldUseSlider = videos.length > 3;

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

            {shouldUseSlider ? (
               <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scrollbar-hide">
                  {videos.map((video) => (
                     <div
                        key={video.slug}
                        className="w-[78vw] shrink-0 snap-start sm:w-75 lg:w-85"
                     >
                        <FeaturedSlimVideoCard video={video} />
                     </div>
                  ))}
               </div>
            ) : (
               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video) => (
                     <FeaturedSlimVideoCard key={video.slug} video={video} />
                  ))}
               </div>
            )}

         </div>
      </section>
   );
}
