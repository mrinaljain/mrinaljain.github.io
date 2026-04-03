
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Posts",
  description: "Read posts and notes by Mrinal Jain on engineering and product development.",
  path: "/post",
  type: "website",
});

export default function PostPage() {
  return (
    <div>
      <h1>Post Page</h1>
      <p>This is the about page in Next.js with TypeScript.</p>
    </div>
  );
}
