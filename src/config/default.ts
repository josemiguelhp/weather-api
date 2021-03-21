import * as dotenv from 'dotenv'

dotenv.config()

export const config = {
  appName: process.env.APP_NAME || 'weather-api',
  server: {
    port: process.env.API_PORT || 8080,
    basePath: process.env.API_BASE_PATH || '/v1',
    version: process.env.API_VERSION || '1.0.0'
  }
}
export const ipApi = {
  url: process.env.IP_API_URL || 'http://ip-api.com',
  path: process.env.IP_API_PATH || '/json'
}

export const weatherApi = {
  url: process.env.WEATHER_API_URL || 'http://api.openweathermap.org/data/2.5',
  key: process.env.WEATHER_API_KEY || '1cded7debd45aa5bcd0979a4e7cec41b' //This could be broken.. https://openweathermap.org/
}
