const Discord = require("discord.js");

exports.run = async (client, message, params) => {
  let user = message.guild.channels.cache.find(c => c.name === 'çağır')
//Dcs Ekibi
  const juke = await client.channels.cache.get(message.channel.id).createInvite();
  message.delete();

  const embed = new Discord.MessageEmbed()
    .setTitle("Owner Bot")
    .setDescription("**Yapımcımı Çağırdım**")
    .setFooter("Uzun Bir Süre Cevap Verilmez ise Destek Sunucusuna Gelin!");
  message.channel.send(embed);

  const invite = new Discord.MessageEmbed()
    .setAuthor("• Talep")
    .addField(
      "**• Kullanıcı Adı **",
      message.author.username + "#" + message.author.discriminator
    )
    .addField("**• Sunucu Adı **", message.guild.name)
    .setDescription(juke.url);
  user.send(invite)
};
//Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "çağır",
  description: "Botun Yapımcısına Mesaj Gönderir!",
  usage: "çağır"
};