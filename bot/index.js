// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

// Environment variables
require('dotenv').config();

// Setup Logging
const { loggers } = require('winston');
require('./log.js');
const logger = loggers.get('bot-logger');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Dynamically retrieve commands from commands folder
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
	logger.info(`Loading ${file} command`);
}

// Dynamically retrieve event actions from events folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, async (...args) => event.execute(...args));
	}
	logger.info(`Loading ${file} event`);
}

// Login to Discord with your client's token
client.login(process.env.TOKEN);