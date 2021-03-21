import { log } from '../utils/logger'

import { GetWeatherHandler } from './get-weather'

import { converterService } from '../services'

export const getWeatherHandler = new GetWeatherHandler(converterService, log)
