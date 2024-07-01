import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the Leaflet setup utility
import "@/leaflet-setup";

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [marker, setMarker] = useState<L.Marker | null>(null);

  useEffect(() => {
    // Get latitude and longitude from localStorage
    const lat = localStorage.getItem("latitude");
    const lon = localStorage.getItem("longitude");

    console.log("latitude and latitude are ", lat, lon);

    // Fallback location if lat/lon are not in localStorage
    const initialLat = lat ? parseFloat(lat) : 51.505;
    const initialLon = lon ? parseFloat(lon) : -0.09;

    // Initialize the map
    const mapInstance = L.map("map").setView([initialLat, initialLon], 13);
    setMap(mapInstance);

    // Add the tile layer from OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    // Add a marker to the map at the initial location
    const initialMarker = L.marker([initialLat, initialLon])
      .addTo(mapInstance)
      .bindPopup("Initial location");
    setMarker(initialMarker);

    // Clean up on unmount
    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (map && marker) {
      const updateMapView = () => {
        const lat = localStorage.getItem("latitude");
        const lon = localStorage.getItem("longitude");

        if (lat && lon) {
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);

          const newLocation = [latitude, longitude] as L.LatLngTuple;
          map.setView(newLocation, 13);
          marker.setLatLng(newLocation).bindPopup("You").openPopup();
        }
      };

      // Initial update
      updateMapView();

      // Add event listener to update map when localStorage changes
      window.addEventListener("storage", updateMapView);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("storage", updateMapView);
      };
    }
  }, [map, marker]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
