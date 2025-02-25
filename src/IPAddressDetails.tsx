import { IpifyResponse } from "./types";

interface IpDataProps {
  ipData: IpifyResponse | null;
  error: string | null;
}

export const IPAddressDetails = ({ ipData, error }: IpDataProps) => {
  if (!ipData) {
    return error ? (
      <div className="absolute left-0 right-0 mx-4 mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
        {error}
      </div>
    ) : null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[20rem] translate-y-1/2 transform space-y-4 rounded-2xl bg-white p-8 shadow-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
      <div className="font-rubik grid grid-cols-1 gap-8 text-center sm:grid-cols-4 lg:text-left">
        <div className="lg:border-r lg:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            IP Address
          </p>
          <p className="text-xl font-medium">{ipData?.ip}</p>
        </div>
        <div className="lg:border-r lg:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            LOCATION
          </p>
          <p className="text-xl font-medium">
            {ipData?.location.city}, {ipData?.location.region},
            {ipData?.location.postalCode}
          </p>
        </div>
        <div className="lg:border-r lg:border-gray-300">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            TIMEZONE
          </p>
          <p className="text-xl font-medium">UTC {ipData?.location.timezone}</p>
        </div>
        <div className="">
          <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
            ISP
          </p>
          <p className="text-xl font-medium">{ipData?.isp}</p>
        </div>
      </div>
    </div>
  );
};
