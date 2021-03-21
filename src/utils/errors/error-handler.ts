import { STATUS_CODES } from 'http'
import { ResourceNotFound, ServiceError } from './errors'
import { log } from '../logger'

/**Error Handler for uncaughtException
 * and unhandledRejection on main process
 */

export const httpError = (reply: any) => (httpStatus: number = 500, error: any = 'Internal server Error') =>
  reply.status(httpStatus).send({
    code: STATUS_CODES[httpStatus],
    message: error.message,
    errors: error.errors
  })

export const errorHandler = function (error: any, req: any, response: any, next: any) {
  const isError = true
  const replyError = httpError(response)
  switch (isError) {
    case error instanceof ResourceNotFound:
      log.warn(error)
      return replyError(404, {
        message: error.message,
        resource: error.resource
      })
    case error instanceof ServiceError:
      log.warn(error)
      return response.status(400).send({ code: STATUS_CODES[400], message: error.message })

    default:
      // Unknow error
      log.error(error)
      return response.status(500).send('Internal Server Error')
  }
}
