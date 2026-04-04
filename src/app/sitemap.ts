import type { MetadataRoute } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";
import { getBaseUrl } from "@/lib/url";

export const revalidate = 3600; // Refresh sitemap every hour.

const APP_DIR = path.join(process.cwd(), "src", "app");
const PAGE_FILE_REGEX = /^page\.(ts|tsx|js|jsx|mdx)$/;
const EXCLUDED_SEGMENTS = new Set(["api"]);

type DynamicRouteProvider = () => Promise<string[]>;

function toRoute(parts: string[]): string {
  if (parts.length === 0) return "/";
  return `/${parts.join("/")}`;
}

function isDynamicSegment(segment: string): boolean {
  return /^\[.*\]$/.test(segment);
}

function normalizeSegment(segment: string): string | null {
  if (segment.startsWith("@")) return null;

  // Route groups do not affect URL paths.
  if (segment.startsWith("(") && segment.endsWith(")")) {
    return "";
  }

  return segment;
}

async function collectStaticRoutes(): Promise<string[]> {
  const routes = new Set<string>();

  async function walk(currentDir: string, routeParts: string[], hasDynamicAncestor: boolean): Promise<void> {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    const hasPage = entries.some((entry) => entry.isFile() && PAGE_FILE_REGEX.test(entry.name));
    if (hasPage && !hasDynamicAncestor) {
      routes.add(toRoute(routeParts));
    }

    const directories = entries.filter((entry) => entry.isDirectory());

    await Promise.all(
      directories.map(async (entry) => {
        if (EXCLUDED_SEGMENTS.has(entry.name) || entry.name.startsWith("_")) {
          return;
        }

        const normalizedSegment = normalizeSegment(entry.name);
        if (normalizedSegment === null) {
          return;
        }

        const isDynamic = isDynamicSegment(entry.name);
        const nextHasDynamic = hasDynamicAncestor || isDynamic;
        const nextRouteParts = normalizedSegment ? [...routeParts, normalizedSegment] : routeParts;

        await walk(path.join(currentDir, entry.name), nextRouteParts, nextHasDynamic);
      })
    );
  }

  await walk(APP_DIR, [], false);

  return Array.from(routes).sort((a, b) => a.localeCompare(b));
}

async function getVideoDetailRoutes(): Promise<string[]> {
  try {
    if (!process.env.MONGODB_URI) {
      return [];
    }

    const [{ default: connectDB }, { VideoModel }] = await Promise.all([
      import("@/lib/db/mongodb"),
      import("@/models/Video"),
    ]);

    await connectDB();

    const videos = await VideoModel.find({
      status: "published",
      isIndexable: true,
    })
      .select("slug")
      .lean<Array<{ slug?: string }>>();

    return videos
      .filter((video) => Boolean(video.slug))
      .map((video) => `/videos/${video.slug}`);
  } catch {
    // If DB isn't available during build/deploy, still return static routes.
    return [];
  }
}

const dynamicRouteProviders: DynamicRouteProvider[] = [getVideoDetailRoutes];

function createEntry(route: string, siteUrl: string): MetadataRoute.Sitemap[number] {
  const now = new Date();
  const priority =
    route === "/" ? 1 : route === "/resume" ? 0.9 : route.startsWith("/videos/") ? 0.7 : 0.8;

  return {
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/videos/") ? "weekly" : "monthly",
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getBaseUrl().replace(/\/$/, "");

  const staticRoutes = await collectStaticRoutes();
  const dynamicRouteGroups = await Promise.all(dynamicRouteProviders.map((provider) => provider()));
  const dynamicRoutes = dynamicRouteGroups.flat();

  const allRoutes = Array.from(new Set([...staticRoutes, ...dynamicRoutes])).sort((a, b) =>
    a.localeCompare(b)
  );

  return allRoutes.map((route) => createEntry(route, siteUrl));
}
