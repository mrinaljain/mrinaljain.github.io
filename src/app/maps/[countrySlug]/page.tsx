import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import type { Metadata } from "next";
import type { CountryWithCities } from "@/types/maps";
import CountryMapWrapper from "@/components/maps/CountryMapWrapper";

async function getCountry(slug: string): Promise<CountryWithCities | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/maps/countries/${slug}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.country ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}): Promise<Metadata> {
  const { countrySlug } = await params;
  const data = await getCountry(countrySlug);
  if (!data) return { title: "Country Not Found" };
  return {
    title: `${data.name} | Travel Map`,
    description: data.description || `Explore cities Mrinal Jain visited in ${data.name}.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const country = await getCountry(countrySlug);

  if (!country) notFound();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-900">
      <Header />

      {/* map fills remaining viewport */}
      <div className="flex-1 relative">
        <CountryMapWrapper
          countrySlug={countrySlug}
          center={[country.coordinates.lat, country.coordinates.lng]}
          zoom={country.zoomLevel}
          cities={country.cities}
        />

        {/* floating breadcrumb + info panel */}
        <div className="absolute top-20 left-4 z-[1000] flex flex-col gap-2">
          <Link
            href="/maps"
            className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/90 transition-colors w-fit"
          >
            ← World Map
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
          <div className="bg-black/70 backdrop-blur-md text-white rounded-2xl px-6 py-3 shadow-xl flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-sm">{country.name}</p>
              <p className="text-xs text-gray-300">
                {country.cities.length}{" "}
                {country.cities.length === 1 ? "city" : "cities"} visited — click a
                pin to explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
