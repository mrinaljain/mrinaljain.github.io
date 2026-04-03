
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Talks",
  description: "Explore speaking sessions and conference talks by Mrinal Jain.",
  path: "/talk",
  type: "website",
});

export default function TalkPage() {
  return (
    <div>
      <h1>Talks Page</h1>
      <p>This is the about page in Next.js with TypeScript.</p>
    </div>
  );
}
