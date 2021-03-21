import { Request, Response } from 'express'

export interface IGetWeatherHandler {
  getLocation(req: Request, res: Response): any
}
