import { getMockReq, getMockRes } from '@jest-mock/express'
import { GetWeatherHandler } from './get-weather'
import { log } from '../utils/logger'
import { HttpRequest } from '../utils/http/http-request'
import { LocationService } from '../services/location-service'
import axios from 'axios'

describe('PostConvertHandler', () => {
  beforeAll(() => {
    jest.spyOn(LocationService.prototype, 'getLocation').mockImplementation(async () => {
      return { location: 2 }
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
})
