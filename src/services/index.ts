import { log } from '../utils/logger'
import { httpRequest } from '../utils/http'
import { LocationService } from './location-service'

export const converterService = new LocationService(httpRequest, log)
