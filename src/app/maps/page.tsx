import Header from "@/components/Header";
import type { Metadata } from "next";
import type { Country } from "@/types/maps";
import WorldMapWrapper from "@/components/maps/WorldMapWrapper";

export const metadata: Metadata = {
  title: "Travel Map",
  description: "Explore the countries and cities Mrinal Jain has visited around the world.",
};

async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/maps/places`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.countries ?? [];
  } catch {
    return [];
  }
}
export default async function MapsPage() {
  const countries = await getCountries();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-900">
      <Header />

      {/* map fills the whole viewport */}
      <div className="flex-1 relative">
        <WorldMapWrapper countries={countries} />

        {/* floating info panel */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
          <div className="bg-black/70 backdrop-blur-md text-white rounded-2xl px-6 py-3 shadow-xl flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-semibold text-sm">
                {countries.length} {countries.length === 1 ? "Country" : "Countries"} Visited
              </p>
              <p className="text-xs text-gray-300">Click a pin to explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
