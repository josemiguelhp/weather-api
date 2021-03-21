import { log } from '../logger'

import { HttpRequest } from './http-request'
import axios from 'axios'

export const httpRequest = new HttpRequest(axios, log)
