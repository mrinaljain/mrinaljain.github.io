import Link from "next/link";
import type { BlogPostMeta } from "@/types/blog";

type BlogListProps = {
  posts: BlogPostMeta[];
  basePath: string;
  heading: string;
  description: string;
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogList({ posts, basePath, heading, description }: BlogListProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">{heading}</h1>
        <p className="max-w-3xl text-neutral-600">{description}</p>
      </div>

      <div className="mt-10 grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
              <Link href={`${basePath}/${post.slug}`} className="hover:text-blue-700">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-neutral-700">{post.excerpt}</p>

            {post.tags.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.slug}-${tag}`}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <Link
              href={`${basePath}/${post.slug}`}
              className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
