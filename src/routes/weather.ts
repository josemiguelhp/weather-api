import { Router } from 'express'
import { asyncWrapper } from '../utils/asyncWrapper'
import { IWheatherRouter } from '../../@types/express-custom'
import { IGetWeatherHandler } from '../../@types/controllers'

export class WeatherRouter implements IWheatherRouter {
  private router: Router
  private getWeatherHandler: IGetWeatherHandler

  constructor(getWeatherHandler: IGetWeatherHandler) {
    this.getWeatherHandler = getWeatherHandler
    this.router = Router()
    this.routes()
  }

  public routes(): void {
    this.router.get('/location', asyncWrapper(this.getWeatherHandler.getLocation))
  }
  public getRouter(): Router {
    return this.router
  }
}
