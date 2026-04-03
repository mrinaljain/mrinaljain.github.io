
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
   return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 text-center">
         <Image
            src="/images/404.png" // <-- Replace with your own image path
            alt="404 Not Found"
            width={300}
            height={300}
            className="mb-6"
         />

         <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">404 - Not Found</h1>
         <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg italic">
            “Not all those who wander are lost… but this page is.”
         </p>

         <div className="flex flex-wrap justify-center gap-4">
            <Link
               href="/"
               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition-all duration-200"
            >
               🏠 Home
            </Link>
            <Link
               href="/contact"
               className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded transition-all duration-200"
            >
               📩 Contact
            </Link>
            <Link
               href="/search"
               className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded transition-all duration-200"
            >
               🔍 Search
            </Link>
         </div>

         <div className="absolute bottom-6 text-sm text-slate-600 dark:text-slate-400">
            – The Introvert Influencer
         </div>
      </div>
   );
}
