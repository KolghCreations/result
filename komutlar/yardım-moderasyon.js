const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField ('ban-log','**Ban logunu ayarlar.**')
    .addField ('ban-yetkili-rol','**Banı atabilecek rolü ayarlar.**')
    .addField ('ban','**Etiketlediğiniz kullanıcıyı banlar.**')
    .addField ('kick-log','**Kick logunu ayarlar.**')
    .addField ('kick-yetkili-rol','**Kicki atabilecek rolü ayarlar.**')
    .addField ('kick','**Etiketlediğiniz kullanıcıyı kickler.**')
    .addField ('küfür-engel','**Sunucuda küfür edilmesini engeller**')
    .addField (',svlist','**Bütün sunucuları gösterir (Sadece bot sahibi kullanabilir)**')
.addField (',slowmode','**Kanala yavaşmod ekler!**')
    .addField (',sil','**Belirttiğiniz sayıda mesaj siler!**')
    .addField (',reboot','**Botu yeniden başlatır.**')
    .addField (',reklam','**Sunucuda reklam yapılmasını engeller!**')
    .addField (',caps','**Fazla büyük harf kullanılmasını engeller!**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/731219163317534740/358cc8b29bfce79f0ed3a56f03630c76.webp') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y' , 'mod' , 'yardim'],
 permLevel: 0
};

exports.help = {
 name: 'moderasyon'
};