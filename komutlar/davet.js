const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, m) => {
  const devtr_kod = new Discord.MessageEmbed()
  .setTitle(`Result Bot`)
    .setAuthor(`Result`)
  .setColor("BLACK")
  .setThumbnail("")
  .setDescription('Botu kendi sunucuna davet edebilirsin :)')
  .setTimestamp()
  .addField("Davet linki", `[Tıkla](https://discord.com/oauth2/authorize?client_id=731219163317534740&scope=bot&permissions=8)`, false)
  .setURL("https://discord.gg/KUk89PR")
  .addField("Web Sitesine Işınlanmak İçin", `[Tıkla](https://www.resultbot.cf)`, false)
      .setThumbnail(client.user.avatarURL);

  m.channel.send(devtr_kod);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
  name: 'davet'
};