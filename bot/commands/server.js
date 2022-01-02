const { SlashCommandBuilder } = require('@discordjs/builders');
const { loggers } = require('winston');
const logger = loggers.get('command-logger');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
		logger.info('`server` command executed!');
		return await interaction.reply('Server info.');
	},
};