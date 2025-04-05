// app/about/page.tsx

import { Metadata } from "next";


export const metadata: Metadata ={
   title: "Resume",
   description: "Tech Consultant, Developer, and Speaker with expertise in Flutter, React, and SaaS applications. Explore my projects, talks, and insights",
}
export default function Resume() {
   return (
      <div>
         <h1>Resume Page</h1>
         <p>This is the about page in Next.js with TypeScript.</p>
      </div>
   );
}
