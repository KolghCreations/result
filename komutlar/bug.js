const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bug = args.join(" ").slice(0);
  let user = message.author.username;
  let guild = message.guild.name;
  let guildid = message.guild.id;
  let kanal = message.channel.name;
  let channel = bot.channels.cache.get("738790907331215369"); //bug repot kanal id'i
  let embed = new Discord.MessageEmbed()
    .setTitle("Bug Report")
    .setThumbnail("")
    .addField("Bug", bug)
    .addField("Report Eden", user, true)
    .addField("Sunucu", guild, true)
    .addField("Sunucu ID", guildid, true)
    .addField("Kanal", kanal, true)
    .setColor("#f49542");

  message.channel.send(
    "<a:ticky:737340591700181041>  **| Bug Report Başarı İle İletildi.**"
  );
  channel.send(embed).then(i => i.react(":hourglass_flowing_sand:"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hata-bildir"],
  permLevel: 0
};

exports.help = {
  name: "bug",
  description: "Bottaki hatalı kodu bildirirsiniz.",
  usage: ",bug <bulduğunuz hata>"
};
