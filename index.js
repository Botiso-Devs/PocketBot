const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", () => {
  console.log("Bot Online")
  
bot.user.setActivity("TwinFactions | -help", {type: "PLAYING"})
});
  
bot.on("message", (message) => {
  if(message.content === "-nickname") {
     message.member.setNickname("Player •" + `${message.author.username}`)
     message.channel.send("You Have Been Given The Tag Player")
  }
});
 

bot.login(process.env.TOKEN)
