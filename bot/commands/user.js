const { SlashCommandBuilder } = require('@discordjs/builders');
const { loggers } = require('winston');
const logger = loggers.get('command-logger');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		logger.info('`user` command executed!');
		return await interaction.reply('User info.');
	},
};