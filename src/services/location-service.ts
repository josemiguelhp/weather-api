import { ILocationService } from '../../@types/services'
import { IHttpRequest } from '../../@types/utils'
import { ipApi } from '../config/default'
import { ServiceError } from '../utils/errors/errors'
var isLocal = require('is-localhost')

export class LocationService implements ILocationService {
  private httpRequest: IHttpRequest
  private log: any

  constructor(httpRequest: IHttpRequest, log: any) {
    this.log = log
    this.httpRequest = httpRequest
    this.httpRequest.setHeader({ 'Content-Type': 'application/json' })
  }

  public async getLocation(ip: string | undefined) {
    try {
      if (!ip) throw new Error('ip is not comming in params')
      if (isLocal(ip)) {
        this.httpRequest.setPath(`${ipApi.path}`)
        this.log.info('ip obtained is a localhost')
      } else {
        this.httpRequest.setPath(`${ipApi.path}/${ip}`)
      }
      this.httpRequest.setUrl(ipApi.url)
      const response = await this.httpRequest.get()
      return response
    } catch (err) {
      this.log.error(err)
      throw new ServiceError('ERROR_FROM_GET_LOCATION_SERVICE')
    }
  }
}
