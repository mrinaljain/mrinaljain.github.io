
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
   title: "Tutorials",
   description: "Step-by-step tutorials and practical walkthroughs by Mrinal Jain.",
   path: "/tutorial",
   type: "website",
});

export default function Tutorial() {
   return (
      <div>
         <h1>Tutorials Page</h1>
         <p>This is the about page in Next.js with TypeScript.</p>
      </div>
   );
}
