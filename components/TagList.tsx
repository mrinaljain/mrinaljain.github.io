import { featuredItems } from "@/data/featured";
import Image from "next/image";

// Sample JSON data (you can also import it from a JSON file)
const tags = [
   {
      text: "Shark Tank Featured",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7017113218225455104/"
   },
   {
      text: "30 Under 30 Techie",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6560229816279371776/"
   },
   
   {
      text: "Meta DevCircle Lead",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6610750093526167552/"
   }
];

const TagList = () => {
   return (
      <div className="flex flex-wrap gap-4 items-center">
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
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
               />
            </a>
         ))}
      </div>
   );
};

export default TagList;
