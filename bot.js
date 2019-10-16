const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});




var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];



client.on("message", function(message) {
    
    
    
    
    if(message.content === "-draw") {
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
          message.channel.send("The Card: ```" + randomItem + "```")
    }
    
    
    
    
    
});


client.login(process.env.BOT_TOKEN);
