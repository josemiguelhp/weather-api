import { HttpRequestError } from '../errors/errors'

export class HttpRequest implements IHttpRequest {
  private payload: any
  private url: string
  private path: string
  private header: any
  private log: any
  private axios: any

  constructor(axios: any, log: any) {
    this.log = log
    this.axios = axios
    this.path = ''
    this.url = ''
    this.header = {}
  }

  public setBody(payload: any): void {
    this.payload = payload
  }

  public setHeader(header: any): void {
    this.header = header
  }

  public setUrl(url: string): void {
    this.url = url
  }

  public setPath(path: string): void {
    this.path = path
  }

  public async post() {
    try {
      const response = await this.axios({
        method: 'POST',
        url: this.url + this.path,
        data: this.payload,
        headers: this.header
      })

      return response.data
    } catch (error) {
      console.log('AXIOS:', error)
      throw new HttpRequestError()
    }
  }

  public async patch() {
    try {
      const response = await this.axios({
        method: 'PATCH',
        url: this.url + this.path,
        data: this.payload,
        headers: this.header
      })

      return response.data
    } catch (error) {
      console.log('AXIOS:', error)
      throw new HttpRequestError()
    }
  }
}

export interface IHttpRequest {
  setUrl(url: string): void
  setBody(body: any): void
  setPath(path: string): void
  setHeader(header: any): void
  post(): any
  patch(): any
}
