const { loggers } = require('winston');
const logger = loggers.get('event-logger');

module.exports = {
	name: 'ready',
	// When the client is ready, run this code (only once)
	once: true,
	execute(client) {
		logger.info(`Ready! Logged in as ${client.user.tag}`);
	},
};