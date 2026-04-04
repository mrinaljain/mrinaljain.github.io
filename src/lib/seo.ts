import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/url";

const SITE_TITLE = "Mrinal Jain";
const SITE_NAME = "Mrinal Jain - Portfolio";
const DEFAULT_DESCRIPTION =
  "Tech Consultant, Developer, and Speaker with expertise in Flutter, React, and SaaS applications. Explore my projects, talks, and insights.";
const DEFAULT_IMAGE = "/opengraph-image.jpeg";
const DEFAULT_KEYWORDS = [
  "Mrinal Jain",
  "Introvert Influencer",
  "Tech Consultant",
  "Flutter Developer",
  "React Developer",
  "Engineering Manager",
  "Tech Speaker",
  "Software Engineer",
];

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article" | "video.other";
  keywords?: string[];
  twitterCard?: "summary" | "summary_large_image" | "player";
};

function normalizePath(path?: string) {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function toAbsoluteUrl(path?: string) {
  const baseUrl = getBaseUrl().replace(/\/$/, "");
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? `${baseUrl}/` : `${baseUrl}${normalizedPath}`;
}

export function createPageMetadata(options: BuildMetadataOptions = {}): Metadata {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    path = "/",
    image = DEFAULT_IMAGE,
    noIndex = false,
    type = "website",
    keywords = DEFAULT_KEYWORDS,
    twitterCard = "summary_large_image",
  } = options;

  const url = toAbsoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE} | Introvert Influencer`,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: twitterCard,
      title: title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE} | Introvert Influencer`,
      description,
      images: [imageUrl],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(toAbsoluteUrl("/")),
  title: {
    default: `${SITE_TITLE} | Introvert Influencer`,
    template: `${SITE_TITLE} | %s`,
  },
  applicationName: SITE_TITLE,
  authors: [{ name: SITE_TITLE, url: "https://www.linkedin.com/in/mrinaljain/" }],
  referrer: "no-referrer-when-downgrade",
  creator: SITE_TITLE,
  publisher: SITE_TITLE,
  icons: {
    icon: "/favicon.ico",
  },
  generator: "VSCode",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: "0e75-VwaqN5FEq06g4S0sJ5JVbV6OK5WShoxiy2Y2Fk",
    yandex: "63db5177f1385edc",
  },
  ...createPageMetadata(),
};
