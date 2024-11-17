import { useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  const [mapInitialized, setMapInitialized] = useState(false);
  const mapContainer = useRef(null);

  const lng = 33.8547;
  const lat = 35.8623;
  const zoom = 6;
  const API_KEY = process.env.NEXT_PUBLIC_MATPILER_API_KEY;

  useEffect(() => {
    if (mapInitialized) return; // only run this effect if the map hasn't been initialized yet

    const map = new maplibregl.Map({
      container: mapContainer.current!, // non-null assertion since we are sure it will exist
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    const marker = new maplibregl.Marker({ draggable: true })
      .setLngLat([33.8547, 35.8623])
      .addTo(map);

    function onDragEnd() {
      const lnglat = marker.getLngLat();
      const coordinates = document.getElementById("coordinates");
      if (coordinates) {
        coordinates.style.display = "block";
        coordinates.textContent = `Longitude: ${lnglat.lng}\r\nLatitude: ${lnglat.lat}`;
      }
    }

    marker.on("dragend", onDragEnd);

    setMapInitialized(true); // mark the map as initialized
  }, [API_KEY, lng, lat, zoom, mapInitialized]);

  return (
    <div
      className="map-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
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
      <pre
        id="coordinates"
        className="coordinates"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "10px",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "5px 10px",
          margin: 0,
          fontSize: "11px",
          lineHeight: "18px",
          borderRadius: "3px",
        }}
      >
        Longitude: 33.8547 <br />
        Latitude: 35.8623
      </pre>
    </div>
  );
}
