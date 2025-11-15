import { featuredItems } from "@/data/featured";
import Image from "next/image";

const TagList = () => {
   return (
      <div className="mt-10">

         <div className="relative my-4">
            <hr className="border-gray-300" />
            <span className="absolute left-1/2 -top-3 transform -translate-x-1/2 bg-white px-3 text-xs text-gray-500 uppercase tracking-wide">
               Featured On
            </span>
         </div>

         <div className="flex flex-wrap gap-x-5 gap-y-3 items-center justify-center sm:justify-start">
            {featuredItems.map((item) => (
               <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
               >
                  <Image
                     src={item.logo}
                     alt={item.name}
                     width={120}
                     height={45}
                     className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
               </a>
            ))}
         </div>
      </div>
   );
};

export default TagList;
