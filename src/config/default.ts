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
