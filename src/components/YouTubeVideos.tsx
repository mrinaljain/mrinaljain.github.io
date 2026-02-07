"use client"
import { useEffect, useState } from "react";
import { YoutubeVideo, youtubeVideos } from "../data/youtubeVideos";
import Image from "next/image";


export default function YouTubeVideos() {
   const [videos, setVideos] = useState<YoutubeVideo[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      async function fetchVideos() {
         try {
            // const response = await fetch("/api/youtubeVideos");
            // const data = await response.json();

            // if (response.ok) {
            setVideos(youtubeVideos);
            // } else {
            // setError("Failed to fetch videos.");
            // }
         } catch (error) {
            setError("An error occurred while fetching videos." + error);
         } finally {
            setLoading(false);
         }
      }

      fetchVideos();
   }, []);

   return (
      <section className="py-12 bg-gray-50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Featured Videos</h2>
            {/* <Link href="/talk"> View All</Link> */}
            {/* Loading State */}
            {loading && <p className="text-center">Loading videos...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Video Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
               {videos.map((video) => (
                  <div
                     key={video.id}
                     className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                  >
                     <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <Image
                           src={video.thumbnail}
                           alt={video.title}
                           width={400}
                           height={200}
                           className="w-full h-56 object-cover rounded-lg transition-transform transform group-hover:scale-110"
                        />
                     </a>
                     <div className="p-4 bg-white rounded-lg shadow-lg absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-lg font-semibold text-gray-900">{video.title}</p>
                        <p className="text-sm text-gray-600 truncate">{video.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
