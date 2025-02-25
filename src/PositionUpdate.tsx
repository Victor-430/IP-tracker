import { useEffect } from "react";

import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

export const PositionUpdate = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();

  useEffect(() => {
    return () => {
      map.setView(center);
    };
  }, [center, map]);
  return null;
};
