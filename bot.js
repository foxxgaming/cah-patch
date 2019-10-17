const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});








client.on("message", function(message) {

var beg = message.content.slice(6, message.content.length)


var myArray = [
  "____ tastes like food.",
   "____ worships satan.",
   "____ finds joy in kpop.",
   "____ is what she said."



  ];
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

    if(message.content === "-draw") {
          message.channel.send("The Card: **" + randomItem + "**")
          message.channel.send("Awaiting input")





    }
//REFERENCE: var beg = message.content.slice(6, message.content.length)

var cardMod = randomItem.slice(5, randomItem.length)

    if (message.content.startsWith("-place ")) {
       message.delete(1); //Supposed to delete message
       message.channel.send(beg + cardMod);
    }



});


client.login(process.env.BOT_TOKEN);
