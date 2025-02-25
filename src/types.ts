export interface IpifyLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
}

export interface IpifyResponse {
  ip: string;
  location: IpifyLocation;
  isp: string;
}
