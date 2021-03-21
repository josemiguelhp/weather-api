import { IValidation } from '../utils/validation'
import { responseRequest } from '../utils/response'
import { STATUS_CODE } from '../utils/globals'
import { Request, Response } from 'express'
import { IGetWeatherHandler } from '../../@types/controllers'
import { ILocationService } from '../../@types/services'

export class GetWeatherHandler implements IGetWeatherHandler {
  private log: any
  private validator: IValidation
  private locationService: ILocationService
  constructor(locationService: ILocationService, validator: IValidation, log: any) {
    this.log = log
    this.validator = validator
    this.locationService = locationService
    this.getLocation = this.getLocation.bind(this)
  }

  public async getLocation(req: Request, res: Response) {
    this.log.info('Incoming Request: ' + JSON.stringify(req.body))

    const response = {}
    return responseRequest(res, STATUS_CODE.OK, response)
  }
}
