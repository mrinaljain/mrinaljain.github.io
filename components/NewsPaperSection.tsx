"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NewsItem, newsItems } from "@/data/newsItems";



export default function NewspaperSection() {
   const [selectedNews, setSelectedNews] = useState<NewsItem | undefined>(undefined);

   return (
      <section className="bg-gray-100 py-16 px-6 md:px-12">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Media Coverages
         </h2>

         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {newsItems.map((news) => {
               const formattedDate = new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
               }).format(news.publishedAt);
               return <div
                  key={news.title}
                  className="group cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl"
                  onClick={() => setSelectedNews(news)}
               >
                  <div className="relative w-full h-48">
                     <Image
                        src={news.imageUrl}
                        alt={news.title}
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition-transform duration-300"
                     />
                  </div>
                  <div className="p-4">
                     <h3 className="text-lg font-semibold text-gray-900">
                        {news.title}
                     </h3>
                     <p className="text-sm text-gray-500">{formattedDate}</p>
                  </div>
               </div>
            })}
         </div>

         {/* Modal */}
         <AnimatePresence>
            {selectedNews && (
               <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedNews(undefined)}
               >
                  <motion.div
                     className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-hidden"
                     initial={{ scale: 0.8 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0.8 }}
                     onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
                  >
                     <div className="relative w-full h-64">
                        <Image
                           src={selectedNews.imageUrl}
                           style={{ objectFit: "cover" }}
                           fill
                           alt={selectedNews.title}
                        />
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-semibold">{selectedNews.title}</h3>
                        <p className="text-gray-500">{selectedNews.publishedAt.toString()}</p>
                        <a
                           href={selectedNews.articleUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                           Read Full Article →
                        </a>
                        <button
                           onClick={() => setSelectedNews(undefined)}
                           className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                           Close
                        </button>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
}
