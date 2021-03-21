import { ILocationService } from '../../@types/services'
import { IHttpRequest } from '../utils/http/http-request'
import { ServiceError } from '../utils/errors/errors'

export class LocationService implements ILocationService {
  private httpRequest: IHttpRequest
  private log: any

  constructor(httpRequest: IHttpRequest, log: any) {
    this.log = log
    this.httpRequest = httpRequest
    this.httpRequest.setHeader({ 'Content-Type': 'application/json' })
  }

  public async getLocation() {
    try {
      /*this.log.info('Body: ' + JSON.stringify(body))
      return response*/
      return { location: 2 }
    } catch (err) {
      throw new ServiceError('ERROR_FROM_POST_TRANSPORTER_SERVICE')
    }
  }
}
