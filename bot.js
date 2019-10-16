const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




client.on("message", function(message) {
    
    
    
    
    if(message.content === "ping") {
          message.channel.send('My Message')
    }
    
    
    
    
    
});


client.login(process.env.BOT_TOKEN);
