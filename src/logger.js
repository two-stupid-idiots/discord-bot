import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: 'logs/null-bot-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d'
});

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.Console(),
    dailyRotateFileTransport
  ]
});

export default logger;