import { log } from '../utils/logger'

import { GetWeatherHandler } from './get-weather'

import { locationService } from '../services'

export const getWeatherHandler = new GetWeatherHandler(locationService, log)
