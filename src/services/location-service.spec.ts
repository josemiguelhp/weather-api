import { log } from '../utils/logger'
import { HttpRequest } from '../utils/http/http-request'
import { LocationService } from '../services/location-service'
import axios from 'axios'
import { ResourceNotFound } from '../utils/errors/errors'

describe('PostConvertHandler', () => {
  beforeAll(() => {})

  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('test service (get Location) localhost', async () => {
    jest.spyOn(HttpRequest.prototype, 'get').mockImplementation(async () => {
      return { city: 'Narnia' }
    })
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const res = await locationService.getLocation('::1')
    expect(res.city).toBe('Narnia')
  })
  it('test service (get Location)', async () => {
    jest.spyOn(HttpRequest.prototype, 'get').mockImplementation(async () => {
      return { city: 'Narnia' }
    })
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const res = await locationService.getLocation('24.48.0.1')
    expect(res.city).toBe('Narnia')
  })
  it('test service (get Current)', async () => {
    jest.spyOn(HttpRequest.prototype, 'get').mockImplementation(async () => {
      return { weather: '...' }
    })
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const res = await locationService.getCurrentLocation('24.48.0.1', 'Buenos Aires')
    expect(res.weather).toBe('...')
  })
  it('test service current (dont exists)', async () => {
    jest.spyOn(HttpRequest.prototype, 'get').mockImplementation(async () => {
      throw new Error()
    })
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    try {
      await locationService.getCurrentLocation('24.48.0.1', 'Ciudad Namekusein')
    } catch (error) {
      expect(error).toBeInstanceOf(ResourceNotFound)
    }
  })
})
