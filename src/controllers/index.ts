import { log } from '../utils/logger'

import { GetWeatherHandler } from './get-weather'

import { converterService } from '../services'

import { validator } from '../utils/'

export const getWeatherHandler = new GetWeatherHandler(converterService, validator, log)
