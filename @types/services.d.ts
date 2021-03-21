export interface ILocationService {
  getLocation(ip: string | undefined): any
  getCurrentLocation(ip: string | undefined, city: string | undefined): any
}
