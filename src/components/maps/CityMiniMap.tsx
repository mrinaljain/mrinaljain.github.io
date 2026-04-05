"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const cityIcon = L.divIcon({
  className: "",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="26" height="34">
      <path d="M12 0C6.48 0 2 4.48 2 10c0 7.73 10 22 10 22S22 17.73 22 10c0-5.52-4.48-10-10-10z"
        fill="#3182ce" stroke="white" stroke-width="1.5"/>
      <circle cx="12" cy="10" r="4" fill="white"/>
    </svg>`,
  iconSize: [26, 34],
  iconAnchor: [13, 34],
  popupAnchor: [0, -36],
});

interface CityMiniMapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

export default function CityMiniMap({ lat, lng, zoom = 11 }: CityMiniMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      dragging={true}
      className="h-full w-full rounded-xl"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[lat, lng]} icon={cityIcon} />
    </MapContainer>
  );
}
