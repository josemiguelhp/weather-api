import { createLogger, format, transports } from 'winston'

import DailyRotateFile from 'winston-daily-rotate-file'
const { NODE_ENV, LOG_FOLDER, APP_NAME } = process.env

/* Winston base config */
const winsonConfig = {
  level: 'info',
  defaultMeta: { service: APP_NAME },
  transports: [new transports.Console()]
}

/* Daily rotate base config */
const dailyConfig = {
  dirname: LOG_FOLDER,
  filename: 'application-%DATE%.log',
  datePattern: 'HH',
  zippedArchive: true,
  maxSize: '20m'
}

const logger = createLogger(winsonConfig)

if (NODE_ENV === 'debug') {
  logger.level = 'debug'
}

if (NODE_ENV === 'production') {
  logger.add(new DailyRotateFile(dailyConfig))
}

const log = logger

export { log }
