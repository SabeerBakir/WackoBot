// The deploy-commands.js is used for deploying / commands to a server
// It only needs to be run once
// You should only need to run it again if you need to add or edit existing Commands

// If you recieve a 403 from discord with "Missing Access", might need to authorize bot the ability to create slash commands.
// Go to this link: https://discord.com/api/oauth2/authorize?client_id=<CLIENT_ID HERE>&permissions=0&scope=bot%20applications.commands

const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require("dotenv").config()
const [ clientId, guildId, token ] = [ process.env.CLIENT_ID, process.env.GUILD_ID, process.env.TOKEN ]

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);