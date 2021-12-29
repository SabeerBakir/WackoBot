const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require("dotenv").config()


console.log('[' + new Date().toISOString() + '] ' + 'Starting Wacko\'s first Discord Bot... 🙃');
client.login(process.env.TOKEN);


client.on('ready', () => {
    console.log('[' + new Date().toISOString() + '] ' + `Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    // Only check message create actions in the #bot channel
    if (msg.channel.id == '925545878062792724'){
        // Log all message create actions
        // Log format: [Timestamp][Discord username (at the time)][Discord ID]: <msg>
        console.log('[' + new Date(msg.createdTimestamp).toISOString() + ']' + 
        '[' + msg.author.username + '#' + msg.author.discriminator + ']' + 
        '[' + msg.author.id + ']: ' + msg.content);

        // If the author isn't a bot, reply to messages
        // This is important so the bot doesn't reply to itself
        if (!msg.author.bot){
            if (msg.content === 'wys'){
                msg.channel.send('wys');
            }
        }
    }
});