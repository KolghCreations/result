const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
     message.channel.send(
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rasgeleşifre', 'pasword', 'sifre', 'şifreoluştur','sifreoluştur','yenisifre'],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: 'şifre',
  description: 'random şifre atar',
  usage: 'şifre'
};