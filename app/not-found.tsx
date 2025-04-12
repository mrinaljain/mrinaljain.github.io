// app/not-found.tsx (if using App Router)

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
         <Image
            src="/images/ghibli-removebg.png" // <-- Replace with your own image path
            alt="404 Not Found"
            width={300}
            height={300}
            className="mb-6"
         />

         <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Not Found</h1>
         <p className="text-gray-600 mb-6">Whoops! That page doesn’t exist.</p>

         <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
               Go to Home
            </Link>
            {/* <Link href="/search" className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
               Search
            </Link> */}
            {/* <Link href="/help" className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
               Help
            </Link> */}
            <Link href="/contact" className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
               Contact
            </Link>
         </div>
      </div>
   );
}
