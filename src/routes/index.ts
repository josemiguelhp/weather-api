import { WeatherRouter } from './weather'
import { getWeatherHandler } from '../controllers'

export const weatherRoute = new WeatherRouter(getWeatherHandler)
