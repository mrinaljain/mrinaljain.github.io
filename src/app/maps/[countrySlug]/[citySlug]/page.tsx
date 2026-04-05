import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import type { Metadata } from "next";
import type { City } from "@/types/maps";
import CityMiniMapWrapper from "@/components/maps/CityMiniMapWrapper";

async function getCity(slug: string): Promise<City | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/maps/cities/${slug}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.city ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string }>;
}): Promise<Metadata> {
  const { citySlug } = await params;
  const city = await getCity(citySlug);
  if (!city) return { title: "City Not Found" };
  return {
    title: `${city.name}, ${city.countryName} | Travel Map`,
    description:
      city.description || `Explore Mrinal Jain's visit to ${city.name}, ${city.countryName}.`,
  };
}

// ─── Future-scope placeholder card ───────────────────────────────────────────
function ComingSoonSection({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 bg-gray-50">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <span className="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full font-medium">
        Coming Soon
      </span>
    </div>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string }>;
}) {
  const { countrySlug, citySlug } = await params;
  const city = await getCity(citySlug);

  if (!city) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section
          className="relative h-72 md:h-96 flex items-end bg-gray-900"
          style={
            city.coverImage
              ? {
                  backgroundImage: `url(${city.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {/* dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-8">
            {/* breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link href="/maps" className="hover:text-white transition-colors">
                World Map
              </Link>
              <span className="text-gray-500">›</span>
              <Link
                href={`/maps/${countrySlug}`}
                className="hover:text-white transition-colors"
              >
                {city.countryName}
              </Link>
              <span className="text-gray-500">›</span>
              <span className="text-white font-medium">{city.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white">{city.name}</h1>
            <p className="text-gray-300 text-sm mt-1">{city.countryName}</p>
            {city.travelledAt && (
              <p className="text-gray-400 text-xs mt-1">
                Visited {new Date(city.travelledAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
              </p>
            )}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
          {/* ── Description ─────────────────────────────────────────────── */}
          {city.description && (
            <section>
              <p className="text-gray-700 text-lg leading-relaxed">{city.description}</p>
            </section>
          )}

          {/* ── Location on map ─────────────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <CityMiniMapWrapper
                lat={city.coordinates.lat}
                lng={city.coordinates.lng}
              />
            </div>
          </section>

          {/* ── Photos ──────────────────────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Photos
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({city.photos.length})
              </span>
            </h2>

            {city.photos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city.photos.map((photo, i) => (
                  <figure
                    key={i}
                    className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square shadow"
                  >
                    <Image
                      src={photo.url}
                      alt={photo.caption || `${city.name} photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {photo.caption && (
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center text-gray-400">
                <p className="text-4xl mb-3">📷</p>
                <p className="font-medium">No photos yet</p>
                <p className="text-sm">Check back soon</p>
              </div>
            )}
          </section>

          {/* ── Future scope sections ────────────────────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More from {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoonSection title="Stories & Blog Posts" icon="✍️" />
              <ComingSoonSection title="Restaurant & Food Guide" icon="🍜" />
              <ComingSoonSection title="Must-Visit Places" icon="🗺️" />
              <ComingSoonSection title="Travel Tips & Notes" icon="💡" />
              <ComingSoonSection title="Vlogs & Videos" icon="🎬" />
              <ComingSoonSection title="Local Events & Culture" icon="🎭" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
