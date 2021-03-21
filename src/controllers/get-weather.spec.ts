import { getMockReq, getMockRes } from '@jest-mock/express'
import { GetWeatherHandler } from './get-weather'
import { log } from '../utils/logger'
import { HttpRequest } from '../utils/http/http-request'
import { LocationService } from '../services/location-service'
import axios from 'axios'

describe('GetWeatherHandler', () => {
  beforeAll(() => {
    jest.spyOn(LocationService.prototype, 'getLocation').mockImplementation(async () => {
      return { city: 'Dublin' }
    })
    jest.spyOn(LocationService.prototype, 'getCurrentLocation').mockImplementation(async () => {
      return { weatherInfo: '...' }
    })
    jest.spyOn(LocationService.prototype, 'getForecast').mockImplementation(async () => {
      return { weatherInfo5Days: '...' }
    })
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('test controller (get Location)', async () => {
    const req = getMockReq({
      clientIp: '::1'
    })
    const { res } = getMockRes()
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const getWeatherHandler = new GetWeatherHandler(locationService, log)
    await getWeatherHandler.getLocation(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(LocationService.prototype.getLocation).toBeCalledTimes(1)
  })

  it('test controller (get Current)', async () => {
    const req = getMockReq({
      clientIp: '::1',
      params: {
        city: 'Narnia'
      }
    })
    const { res } = getMockRes()
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const getWeatherHandler = new GetWeatherHandler(locationService, log)
    await getWeatherHandler.getCurrent(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(LocationService.prototype.getCurrentLocation).toBeCalledTimes(1)
  })

  it('test controller (get Forecast)', async () => {
    const req = getMockReq({
      clientIp: '::1',
      params: {
        city: 'Narnia'
      }
    })
    const { res } = getMockRes()
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const getWeatherHandler = new GetWeatherHandler(locationService, log)
    await getWeatherHandler.getForecast(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(LocationService.prototype.getForecast).toBeCalledTimes(1)
  })
})
