import type { Metadata } from "next";
import Header from "@/components/Header";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on product engineering, software architecture, and career growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <BlogList
        posts={posts}
        basePath="/blog"
        heading="Blog"
        description="Personal notes on engineering, product building, and lessons from shipping at scale."
      />
    </>
  );
}
