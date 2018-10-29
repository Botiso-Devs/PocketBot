const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", () => {
  console.log("Bot Online")
  
bot.user.setActivity("PocketIslands | -help", {type: "PLAYING"})
});
  
bot.login(process.env.TOKEN)
