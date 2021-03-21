import bodyParser from 'body-parser'
import { Application } from 'express'
import requestIp from 'request-ip'
import helmet from 'helmet'

export const setMiddlewares = (app: Application) => {
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  //attach client ip to request
  app.use(requestIp.mw())
}
