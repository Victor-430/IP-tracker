import { useEffect, useState } from "react";

import { IpifyResponse } from "./types";
import { IPAddressDetails } from "./IPAddressDetails";

import { MapDisplay } from "./MapDisplay";
import type { LatLngExpression } from "leaflet";

const IPIFY_API_KEY = import.meta.env.VITE_IPIFY_API_KEY;
console.log(IPIFY_API_KEY);

if (!IPIFY_API_KEY) {
  console.error("API key is missing!");
}

// const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY}`;

const BASE_URL =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_SOe4q6XlJMHGBzItnWtf75JX12LCt";

export const Header = () => {
  const [ipData, setIpData] = useState<IpifyResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([51.505, -0.09]);

  const fetchIpData = async (ip: string = ""): Promise<void> => {
    setIsLoading(true);
    setError(null);

    const url = `${BASE_URL}&ipAddress=${ip}`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const data: IpifyResponse = await res.json();
      setIpData(data);
      setMapCenter([data.location.lat, data.location.lng]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occured");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    fetchIpData(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="bg-mobile md:bg-desktop relative z-10 bg-cover bg-no-repeat py-8 text-center">
        <h1 className="font-rubik mb-6 text-lg font-medium text-white sm:text-2xl md:text-3xl">
          IP Address Tracker
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-[12rem] max-w-[22rem] px-4 sm:mb-16 md:max-w-lg"
        >
          <div className="flex">
            <input
              className="flex-1 rounded-l-2xl px-4 py-5 text-sm outline-none sm:py-3"
              placeholder="search for any IP address or domain"
              value={searchQuery}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
            <button
              type="submit"
              className="rounded-r-2xl bg-black px-4 hover:bg-black/70 disabled:bg-gray-500"
              aria-label="submit search"
              disabled={isLoading}
            >
              <img
                className="hover:translate-x-1"
                alt="search button"
                src="../src/assets/images/icon-arrow.svg"
              />
            </button>
          </div>
        </form>

        <IPAddressDetails ipData={ipData} error={error} />
      </div>
      <MapDisplay ipData={ipData} mapCenter={mapCenter} />
    </div>
  );
};
