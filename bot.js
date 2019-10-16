const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});








client.on("message", function(message) {
    
    
    
    
    if(message.content === "-draw") {
          var myArray = [
            "____ tastes like food.",
             "____ is no more.",
             "____ worships satan.",
             "____ finds joy in kpop.",
             "Witches have ____." 



            ];  
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
          message.channel.send("The Card: **" + randomItem + "**")
    }
    
    
    
    
    
});


client.login(process.env.BOT_TOKEN);
