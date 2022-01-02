const fs = require('fs');
const assert = require('assert');

// Load in commands
const commands = new Map();
const commandFiles = fs.readdirSync('./bot/commands').filter(file => file.endsWith('.js'));

// Create map with command name as key
for (const file of commandFiles) {
	const command = require(`../bot/commands/${file}`);
	const command_name = file.split('.')[0];
	commands.set(command_name, command);
}

describe('Slash Command Tests', () => {
	// Make dummy interaction object that has a custom reply function
	const interaction = {
		reply(reply_string) {
			return reply_string;
		},
	};
	describe('/ping', () => {
		it('Should reply with "Pong!"', async () => {
			const response = await commands.get('ping').execute(interaction);
			assert.equal(response, 'Pong!');
		});
	});
	describe('/server', () => {
		it('Should reply with "Server info."', async () => {
			const response = await commands.get('server').execute(interaction);
			assert.equal(response, 'Server info.');
		});
	});
	describe('/user', () => {
		it('Should reply with "User info."', async () => {
			const response = await commands.get('user').execute(interaction);
			assert.equal(response, 'User info.');
		});
	});
});