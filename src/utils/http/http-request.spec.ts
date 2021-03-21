import { HttpRequest } from './http-request'
import { log } from '../logger'
import axios, { AxiosStatic } from 'axios'

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: Function
  mockRejectedValue: Function
}
jest.mock('axios')
const mockedAxios = axios as AxiosMock

describe('HTTP', () => {
  afterAll(() => {
    // clean up after all tests
    jest.restoreAllMocks()
  })
  it('test http (post)', async () => {
    mockedAxios.mockResolvedValue({ data: {} })
    const httpRequest = new HttpRequest(mockedAxios, log)
    await httpRequest.post()
  })

  it('test error http (post)', async () => {
    mockedAxios.mockRejectedValue({})
    const httpRequest = new HttpRequest(mockedAxios, log)
    await expect(httpRequest.post()).rejects.toThrow('ERROR_HTTP_REQUEST')
  })

  it('test http (patch)', async () => {
    mockedAxios.mockResolvedValue({ data: {} })
    const httpRequest = new HttpRequest(mockedAxios, log)
    await httpRequest.patch()
  })

  it('test error http (patch)', async () => {
    mockedAxios.mockRejectedValue({})
    const httpRequest = new HttpRequest(mockedAxios, log)
    await expect(httpRequest.patch()).rejects.toThrow('ERROR_HTTP_REQUEST')
  })

  it('test http (get)', async () => {
    mockedAxios.mockResolvedValue({ data: {} })
    const httpRequest = new HttpRequest(mockedAxios, log)
    await httpRequest.get()
  })

  it('test error http (get)', async () => {
    mockedAxios.mockRejectedValue({})
    const httpRequest = new HttpRequest(mockedAxios, log)
    await expect(httpRequest.get()).rejects.toThrow('ERROR_HTTP_REQUEST')
  })
})
