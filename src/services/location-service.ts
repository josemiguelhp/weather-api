import { ILocationService } from '../../@types/services'
import { IHttpRequest } from '../../@types/utils'
import { ipApi, weatherApi } from '../config/default'
import { ServiceError, ResourceNotFound } from '../utils/errors/errors'
import isLocal from 'is-localhost'

export class LocationService implements ILocationService {
  private httpRequest: IHttpRequest
  private log: any

  constructor(httpRequest: IHttpRequest, log: any) {
    this.log = log
    this.httpRequest = httpRequest
    this.httpRequest.setHeader({ 'Content-Type': 'application/json' })
    this.geLocationWithIP = this.geLocationWithIP.bind(this)
    this.geCurrentWeatherWithLocation = this.geCurrentWeatherWithLocation.bind(this)
    this.geForecastWithLocation = this.geForecastWithLocation.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

  private async geLocationWithIP(ip: string | undefined) {
    if (!ip) throw new Error('ip is not comming in params')
    if (isLocal(ip)) {
      this.httpRequest.setPath(`${ipApi.path}`)
      this.log.info('ip obtained is a localhost')
    } else {
      this.httpRequest.setPath(`${ipApi.path}/${ip}`)
    }
    this.httpRequest.setUrl(ipApi.url)
    const response = await this.httpRequest.get()
    if (!response.city) throw new Error(`ip-api dont resturns city for ip ${ip}`)
    return response.city
  }

  private async geCurrentWeatherWithLocation(location: string | undefined) {
    if (!location) throw new Error('location is not comming in params')
    this.httpRequest.setUrl(weatherApi.url)
    this.httpRequest.setPath(`/weather?q=${location}&appid=${weatherApi.key}`)
    try {
      const response = await this.httpRequest.get()
      return response
    } catch (error) {
      throw new ResourceNotFound(location, error.message)
    }
  }

  private async geForecastWithLocation(location: string | undefined) {
    if (!location) throw new Error('location is not comming in params')
    this.httpRequest.setUrl(weatherApi.url)
    this.httpRequest.setPath(`/forecast?q=${location}&appid=${weatherApi.key}`)
    try {
      const response = await this.httpRequest.get()
      return response
    } catch (error) {
      throw new ResourceNotFound(location, error.message)
    }
  }

  public async getLocation(ip: string | undefined) {
    try {
      const city = await this.geLocationWithIP(ip)
      return { city }
    } catch (err) {
      this.log.error(err)
      throw new ServiceError('ERROR_FROM_GET_LOCATION_SERVICE')
    }
  }

  public async getCurrentLocation(ip: string | undefined, city: string | undefined) {
    try {
      if (!city) {
        const ipCity = await this.geLocationWithIP(ip)
        const response = await this.geCurrentWeatherWithLocation(ipCity)
        return response
      } else {
        const response = await this.geCurrentWeatherWithLocation(city)
        return response
      }
    } catch (err) {
      if (err instanceof ResourceNotFound) {
        throw err
      }
      this.log.error(err)
      throw new ServiceError('ERROR_FROM_GET_LOCATION_SERVICE')
    }
  }

  public async getForecast(ip: string | undefined, city: string | undefined) {
    try {
      if (!city) {
        const ipCity = await this.geLocationWithIP(ip)
        const response = await this.geForecastWithLocation(ipCity)
        return response
      } else {
        const response = await this.geForecastWithLocation(city)
        return response
      }
    } catch (err) {
      if (err instanceof ResourceNotFound) {
        throw err
      }
      this.log.error(err)
      throw new ServiceError('ERROR_FROM_GET_LOCATION_SERVICE')
    }
  }
}
