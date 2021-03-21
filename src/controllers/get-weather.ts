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
    this.getCurrent = this.getCurrent.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

  public async getLocation(req: Request, res: Response) {
    this.log.info(`Incoming Request: ${req.clientIp}`)
    const { clientIp } = req
    const response = await this.locationService.getLocation(clientIp)
    return res.status(STATUS_CODE.OK).send(response)
  }

  public async getCurrent(req: Request, res: Response) {
    this.log.info(`Incoming Request: ${req.clientIp}`)
    const { clientIp } = req
    const city = req.params.city
    const response = await this.locationService.getCurrentLocation(clientIp, city)
    return res.status(STATUS_CODE.OK).send(response)
  }

  public async getForecast(req: Request, res: Response) {
    this.log.info(`Incoming Request: ${req.clientIp}`)
    const { clientIp } = req
    const city = req.params.city
    const response = await this.locationService.getForecast(clientIp, city)
    return res.status(STATUS_CODE.OK).send(response)
  }
}
