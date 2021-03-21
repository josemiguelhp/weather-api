import { Request, Response } from 'express'

export interface IGetWeatherHandler {
  getLocation(req: Request, res: Response): any
  getCurrent(req: Request, res: Response): any
  getForecast(req: Request, res: Response): any
}
