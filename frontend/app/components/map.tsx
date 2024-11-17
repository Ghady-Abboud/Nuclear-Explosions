import { useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map() {
  const [mapInitialized, setMapInitialized] = useState(false);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const lng = 139.753;
  const lat = 35.6844;
  const zoom = 9;
  const API_KEY = process.env.NEXT_PUBLIC_MATPILER_API_KEY;

  useEffect(() => {
    if (mapInitialized) return; // only run this effect if the map hasn't been initialized yet

    map.current = new maplibregl.Map({
      container: mapContainer.current!, // non-null assertion since we are sure it will exist
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    map.current?.addControl(new maplibregl.NavigationControl(), "top-right");

    setMapInitialized(true); // mark the map as initialized
  }, [API_KEY, lng, lat, zoom, mapInitialized]);

  return (
    <div
      className="map-wrapper"
      style={{
        display:'flex',
        flexDirection: 'column',
        width: "80%",
        flexGrow: 1,
        marginLeft: "0rem",
        overflow: "hidden",
      }}
    >
      <div
        ref={mapContainer}
        className="map-container"
        style={{
          margin: "0 0",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}
