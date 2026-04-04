import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createPageMetadata, toAbsoluteUrl } from "@/lib/seo";
import galleryImages from "@/data/galleryData";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Browse a curated gallery of landscape, city, and travel photography in a fast modal-first experience.",
  path: "/gallery",
  keywords: [
    "Mrinal Jain gallery",
    "photo gallery",
    "Next.js gallery",
    "travel photography",
    "image gallery",
  ],
  type: "website",
});

export default function Gallery() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Mrinal Jain Gallery",
    description:
      "A gallery of travel, nature, and architecture photography presented with modal and detail views.",
    url: toAbsoluteUrl("/gallery"),
    image: galleryImages.map((image) => ({
      "@type": "ImageObject",
      name: image.name,
      contentUrl: image.src,
      description: image.description,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="flex flex-col gap-4 border-b border-slate-200 pb-8 dark:border-slate-800">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Gallery
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          A modal-first photo feed built into the site shell.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          Explore a small set of dummy images with direct detail pages, intercepting modal routes,
          and search-friendly metadata. Each card opens in-place while preserving a standalone URL.
        </p>
      </section>

      <section aria-labelledby="gallery-grid-title" className="mt-10">
        <h2 id="gallery-grid-title" className="sr-only">
          Gallery image grid
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map(({ id, name, src, location, description }) => (
            <li key={id}>
              <Link href={`/gallery/${id}`} className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <Image
                  alt={name}
                  src={src}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <article className="flex flex-col gap-2 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{name}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{location}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

