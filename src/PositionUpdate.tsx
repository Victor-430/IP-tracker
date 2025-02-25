import { useEffect } from "react";

import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

export const PositionUpdate = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  const streetLevelZoom = 15;

  useEffect(() => {
    map.flyTo(center, streetLevelZoom, { duration: 1.5, easeLinearity: 0.25 });
  }, [center, map]);

  return null;
};
