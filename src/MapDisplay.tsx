import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { IpifyResponse } from "./types";

import { PositionUpdate } from "./PositionUpdate";

interface MapDisplayProps {
  mapCenter: LatLngExpression;
  ipData: IpifyResponse | null;
}

export const MapDisplay = ({ mapCenter, ipData }: MapDisplayProps) => {
  return (
    <div className="z-0 flex-1">
      <MapContainer
        center={mapCenter}
        zoom={13}
        zoomControl={false}
        className="h-screen w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter}>
          <Popup>{ipData?.location.city}</Popup>
        </Marker>
        <PositionUpdate center={mapCenter} />
      </MapContainer>
    </div>
  );
};
