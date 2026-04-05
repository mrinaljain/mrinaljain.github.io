"use client";

import dynamic from "next/dynamic";
import type { Country } from "@/types/maps";

const WorldMap = dynamic(() => import("./WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-900">
      <p className="text-white text-lg animate-pulse">Loading map…</p>
    </div>
  ),
});

export default function WorldMapWrapper({ countries }: { countries: Country[] }) {
  return <WorldMap countries={countries} />;
}
