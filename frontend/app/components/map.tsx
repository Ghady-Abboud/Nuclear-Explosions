"use client";
import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map() {
  // Explicitly typing the refs
  const mapContainer = useRef<HTMLDivElement | null>(null); // mapContainer will point to the div
  const map = useRef<maplibregl.Map | null>(null); // map is the maplibregl.Map object

  const lng = 139.753;
  const lat = 35.6844;
  const zoom = 9;
  const API_KEY = process.env.NEXT_PUBLIC_MATPILER_API_KEY;

  useEffect(() => {
    if (map.current) return; // Stops map from initializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current!, // non-null assertion since we are sure it will exist
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrapper" style={{ width: "80vw", height: "100vh" }}>
      <div ref={mapContainer} className="map" style={{ height: "100%" }} />
    </div>
  );
}
