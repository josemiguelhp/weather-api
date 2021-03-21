import { log } from '../utils/logger'
import { HttpRequest } from '../utils/http/http-request'
import { LocationService } from '../services/location-service'
import axios from 'axios'

describe('PostConvertHandler', () => {
  beforeAll(() => {
    jest.spyOn(HttpRequest.prototype, 'get').mockImplementation(async () => {
      return { location: 2 }
    })
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })
  it('test service (get Location) localhost', async () => {
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const res = await locationService.getLocation('::1')
    expect(res.location).toBe(2)
  })
  it('test service (get Location)', async () => {
    const httpRequest = new HttpRequest(axios, log)
    const locationService = new LocationService(httpRequest, log)
    const res = await locationService.getLocation('24.48.0.1')
    expect(res.location).toBe(2)
  })
})
