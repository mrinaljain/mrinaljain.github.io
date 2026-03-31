import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "@/types/blog";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

type Frontmatter = {
  title?: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
};

function toIsoDate(value: string | undefined, fallback: Date): string {
  if (!value) return fallback.toISOString();
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return fallback.toISOString();
  return parsed.toISOString();
}

function toSafeTags(tags: Frontmatter["tags"]): string[] {
  if (!Array.isArray(tags)) return [];
  return tags.filter((tag): tag is string => typeof tag === "string");
}

function filenameToSlug(filename: string): string {
  return filename.replace(/\.md$/i, "");
}

function buildMeta(slug: string, source: string, frontmatter: Frontmatter): BlogPostMeta {
  const fallbackDate = new Date();
  const excerpt =
    frontmatter.excerpt ?? source.replace(/\s+/g, " ").trim().slice(0, 170) + "...";

  return {
    slug,
    title: frontmatter.title ?? slug.replace(/-/g, " "),
    excerpt,
    date: toIsoDate(frontmatter.date, fallbackDate),
    tags: toSafeTags(frontmatter.tags),
    readingTime: readingTime(source).text,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_CONTENT_DIR);
  return files.filter((file) => file.endsWith(".md")).map(filenameToSlug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(gfm).use(html).process(content);

    return {
      ...buildMeta(slug, content, data as Frontmatter),
      contentHtml: processedContent.toString(),
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(BLOG_CONTENT_DIR);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (filename) => {
      const fullPath = path.join(BLOG_CONTENT_DIR, filename);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = filenameToSlug(filename);
      return buildMeta(slug, content, data as Frontmatter);
    }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
