const winston = require('winston');
const { combine, timestamp, printf, label } = winston.format;

const logFormat = printf((info) => {
	return `[${info.timestamp}][${info.label}][${info.level.toUpperCase()}] ${info.message}`;
});

// Bot Logger; Mainly used for bot initializations
winston.loggers.add('bot-logger', {
	level: 'info',
	format: combine(
		timestamp(),
		label({ label: 'Bot' }),
		winston.format.json(),
	),
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		// - Write all logs to console as well
		//
		new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: './logs/combined.log' }),
		new winston.transports.Console({ format: logFormat }),
	],
});

// Event Logger; Used for logging events
winston.loggers.add('event-logger', {
	level: 'info',
	format: combine(
		timestamp(),
		label({ label: 'Event' }),
		winston.format.json(),
	),
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		// - Write all logs to console as well
		//
		new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: './logs/combined.log' }),
		new winston.transports.Console({ format: logFormat }),
	],
});

// Command Logger; Used for logging commands
winston.loggers.add('command-logger', {
	level: 'info',
	format: combine(
		timestamp(),
		label({ label: 'Command' }),
		winston.format.json(),
	),
	transports: [
		//
		// - Write all logs with level `error` and below to `error.log`
		// - Write all logs with level `info` and below to `combined.log`
		// - Write all logs to console as well
		//
		new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: './logs/combined.log' }),
		new winston.transports.Console({ format: logFormat }),
	],
});