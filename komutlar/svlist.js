const Discord = require('discord.js');
const db = require('quick.db') //dcs ekibi
exports.run = (client, message, args) => { 
  
  
   if(message.author.id !== "535681249768112128") return 
  
  
 let dcss = client.guilds.cache.map(a => a.id + " | " + a.name).join('\n');
message.channel.send(dcss, {code: "xl", split: true}); 
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['server-list' , 'svl'], 
  permLevel: 0
};

exports.help = {
  name: 'serverlist',
  description: 'taslak', 
  usage: 's-list'
};