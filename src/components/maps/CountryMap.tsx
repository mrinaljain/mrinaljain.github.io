"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import type { City } from "@/types/maps";

function createPinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="26" height="34">
        <path d="M12 0C6.48 0 2 4.48 2 10c0 7.73 10 22 10 22S22 17.73 22 10c0-5.52-4.48-10-10-10z"
          fill="${color}" stroke="white" stroke-width="1.5"/>
        <circle cx="12" cy="10" r="4" fill="white"/>
      </svg>`,
    iconSize: [26, 34],
    iconAnchor: [13, 34],
    popupAnchor: [0, -36],
  });
}

const cityIcon = createPinIcon("#3182ce"); // blue

interface CountryMapProps {
  countrySlug: string;
  center: [number, number];
  zoom: number;
  cities: City[];
}

export default function CountryMap({
  countrySlug,
  center,
  zoom,
  cities,
}: CountryMapProps) {
  const router = useRouter();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={2}
      maxZoom={18}
      scrollWheelZoom
      className="h-full w-full"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {cities.map((city) => (
        <Marker
          key={city.slug}
          position={[city.coordinates.lat, city.coordinates.lng]}
          icon={cityIcon}
          eventHandlers={{
            click: () => router.push(`/maps/${countrySlug}/${city.slug}`),
          }}
        >
          <Popup>
            <div className="text-center min-w-[120px]">
              <p className="font-semibold text-gray-900 text-sm">{city.name}</p>
              {city.travelledAt && (
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(city.travelledAt).getFullYear()}
                </p>
              )}
              <button
                onClick={() => router.push(`/maps/${countrySlug}/${city.slug}`)}
                className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
              >
                Explore →
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
