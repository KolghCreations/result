const Discord = require("discord.js");
const snekfetch = require("snekfetch"); //Gereken Modül: snekfetch
module.exports.run = async (bot, message, args) => {
  if (!args.slice(0).join(" ")) //DCS Ekibi
    return message.channel.send("Geçerli Bir Yazı Gir!");
const site = "https://www.goldcode.cf"
  snekfetch
    .post(`${site}/documents`)
    .send(args.slice(0).join(" "))
    .then(body => {
      message.channel.send(`Yazını Gold Codeye Yükledim Link: \n${site}/` +
            body.body.key + ``)
        }
      );
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["paste" , "gc"],
  permLevel: 0
}; //DCS Ekibi
module.exports.help = {
  name: "goldcode",
  usage: "hastebin",
  description: "hastebin komutu"
};