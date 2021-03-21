process.env.NODE_CONFIG_DIR = './config'

import { Server } from './server'
import { weatherRoute } from './routes/'
import * as dotenv from 'dotenv'

dotenv.config()
const server: Server = new Server(weatherRoute)
server.start()
