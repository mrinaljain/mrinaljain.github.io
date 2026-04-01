"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import type { Country } from "@/types/maps";

// Custom pin icon — avoids the broken default Leaflet icon path in Next.js
function createPinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="28" height="36">
        <path d="M12 0C6.48 0 2 4.48 2 10c0 7.73 10 22 10 22S22 17.73 22 10c0-5.52-4.48-10-10-10z"
          fill="${color}" stroke="white" stroke-width="1.5"/>
        <circle cx="12" cy="10" r="4" fill="white"/>
      </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -38],
  });
}

const countryIcon = createPinIcon("#e53e3e"); // red

interface WorldMapProps {
  countries: Country[];
}

export default function WorldMap({ countries }: WorldMapProps) {
  const router = useRouter();
  const mapRef = useRef<L.Map | null>(null);

  // Invalidate map size after mount to fix tile rendering inside flex/block containers
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={18}
      worldCopyJump
      scrollWheelZoom
      className="h-full w-full"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {countries.map((country) => (
        <Marker
          key={country.slug}
          position={[country.coordinates.lat, country.coordinates.lng]}
          icon={countryIcon}
          eventHandlers={{
            click: () => router.push(`/maps/${country.slug}`),
          }}
        >
          <Popup>
            <div className="text-center min-w-[120px]">
              <p className="font-semibold text-gray-900 text-sm">{country.name}</p>
              {country.travelledAt && (
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(country.travelledAt).getFullYear()}
                </p>
              )}
              <button
                onClick={() => router.push(`/maps/${country.slug}`)}
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
