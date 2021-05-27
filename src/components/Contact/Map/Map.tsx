import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import Body from "../Body/Body";
import "./Map.css";

const seoul = { lat: 37.564214, lng: 127.001699 };

const Map: React.FC = (props) => {
  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_MAPS_API_KEY! as string,
    { center: seoul, zoom: 7 }
  );

  if (map) {
    new google.maps.Marker({ position: seoul, map });
  }
  return (
    <section className="map__section">
      <div
        className="map__viewer"
        ref={ref}
        style={{ width: 300, height: 400 }}
      />
      <div className="map__body">
        <Body></Body>
      </div>
    </section>
  );
};

export default Map;
