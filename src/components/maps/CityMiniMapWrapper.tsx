"use client";

import dynamic from "next/dynamic";

const CityMiniMap = dynamic(() => import("./CityMiniMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-900 rounded-xl">
      <p className="text-white text-sm animate-pulse">Loading map…</p>
    </div>
  ),
});

interface Props {
  lat: number;
  lng: number;
  zoom?: number;
}

export default function CityMiniMapWrapper({ lat, lng, zoom }: Props) {
  return <CityMiniMap lat={lat} lng={lng} zoom={zoom} />;
}
