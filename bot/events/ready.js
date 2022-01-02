module.exports = {
	name: 'ready',
	// When the client is ready, run this code (only once)
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};