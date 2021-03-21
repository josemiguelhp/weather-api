import * as dotenv from 'dotenv'

dotenv.config()

export const config = {
  appName: process.env.APP_NAME,
  server: {
    port: process.env.API_PORT,
    basePath: process.env.API_BASE_PATH,
    version: process.env.API_VERSION
  }
}
