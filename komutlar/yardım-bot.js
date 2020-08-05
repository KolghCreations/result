const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField(',davet','**Botun davet linkini gösterir.**')
    .addField(',botbilgi ','**Botun bilgilerini gösterir.**')
    .addField(',kullanıcıbilgi','**Etiketlediğiniz kullanıcının bilgisini size gösterir.**')
    .addField(',ping','**Bot pingini gösterir.**')
    .addField(',sunucubilgi','**Sunucu bilgisini gösterir.**')
    .addField(',reboot','**Botu yeniden başlatır.**')
    .addField (',sa-as','**Botun as demesini açar/kapatır**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/731219163317534740/358cc8b29bfce79f0ed3a56f03630c76.webp') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y' , 'bot' , 'yardim'],
 permLevel: 0
};

exports.help = {
 name: 'bot'
};