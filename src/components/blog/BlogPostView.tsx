import Link from "next/link";
import type { BlogPost } from "@/types/blog";

type BlogPostViewProps = {
  post: BlogPost;
  basePath: string;
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostView({ post, basePath }: BlogPostViewProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href={basePath}
        className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        ← Back to all posts
      </Link>

      <article className="mt-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
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
        </header>

        <div
          className="markdown-content mt-8 text-neutral-800"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
