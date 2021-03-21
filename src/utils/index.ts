import { log } from './logger'
import Ajv from 'ajv'
import { Validation } from './validation'
import * as dotenv from 'dotenv'

dotenv.config()

const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv /*, {singleError: true} */)
export const validator = new Validation(ajv, log)
