import { toast, ToastContainer } from "react-toastify";

import { IpifyResponse } from "./types";
import { useEffect } from "react";

interface IpDataProps {
  ipData: IpifyResponse | null;
  error: string | null;
}

export const IPAddressDetails = ({ ipData, error }: IpDataProps) => {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (!ipData) {
    return <ToastContainer />;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[20rem] translate-y-1/2 transform space-x-4 rounded-2xl bg-white p-8 shadow-lg sm:max-w-[38rem] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
      <div className="font-rubik grid grid-cols-1 gap-8 text-center sm:grid-cols-4 sm:gap-6 md:gap-8 lg:text-left">
        <div className="md:border-r md:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            IP Address
          </p>
          <p className="text-xl font-medium sm:text-lg md:text-xl">
            {ipData?.ip}
          </p>
        </div>
        <div className="md:border-r md:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            LOCATION
          </p>
          <p className="text-xl font-medium sm:text-lg md:text-xl">
            {ipData?.location.city}, {ipData?.location.region},
            {ipData?.location.postalCode}
          </p>
        </div>
        <div className="md:border-r md:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            TIMEZONE
          </p>
          <p className="text-xl font-medium sm:text-lg md:text-xl">
            UTC {ipData?.location.timezone}
          </p>
        </div>
        <div className="">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            ISP
          </p>
          <p className="text-xl font-medium sm:text-lg md:text-xl">
            {ipData?.isp}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
