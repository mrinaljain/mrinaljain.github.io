"use client";

import dynamic from "next/dynamic";
import type { City } from "@/types/maps";

const CountryMap = dynamic(() => import("./CountryMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-900">
      <p className="text-white text-lg animate-pulse">Loading map…</p>
    </div>
  ),
});

interface Props {
  countrySlug: string;
  center: [number, number];
  zoom: number;
  cities: City[];
}

export default function CountryMapWrapper({ countrySlug, center, zoom, cities }: Props) {
  return <CountryMap countrySlug={countrySlug} center={center} zoom={zoom} cities={cities} />;
}
