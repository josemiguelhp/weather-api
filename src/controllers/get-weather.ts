import { responseRequest } from '../utils/response'
import { STATUS_CODE } from '../utils/globals'
import { Response, Request } from 'express'
import { IGetWeatherHandler } from '../../@types/controllers'
import { ILocationService } from '../../@types/services'

export class GetWeatherHandler implements IGetWeatherHandler {
  private log: any
  private locationService: ILocationService
  constructor(locationService: ILocationService, log: any) {
    this.log = log
    this.locationService = locationService
    this.getLocation = this.getLocation.bind(this)
  }

  public async getLocation(req: Request, res: Response) {
    this.log.info('Incoming Request: ' + JSON.stringify(req.clientIp))
    const { clientIp } = req
    const response = await this.locationService.getLocation(clientIp)
    return responseRequest(res, STATUS_CODE.OK, response)
  }
}
