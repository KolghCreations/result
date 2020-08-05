const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField(',ekonomi','**Ekonomi komutlarını gösterir.**')
    .addField(',kullanıcı ','**Kullanıcı komutlarını gösterir.**')
    .addField(',bot','**Bot komutlarını gösterir.**')
    .addField(',moderasyon','**Moderasyon komutlarını gösterir.**')
    .addField(',help','**Müzik Komutlarını Gösterir**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/731219163317534740/358cc8b29bfce79f0ed3a56f03630c76.webp') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y' , 'ya' , 'yardim'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};