const { SlashCommandBuilder } = require('@discordjs/builders');
const { loggers } = require('winston');
const logger = loggers.get('command-logger');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		logger.info('`ping` command executed!');
		return await interaction.reply('Pong!');
	},
};