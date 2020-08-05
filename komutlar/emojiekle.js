const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
    let link = args[0]
    let isim = args[1];
    let guild = message.guild;
    if (!link) return message.channel.send('Emojinin linkini girmelisin.')
    if (!isim) return message.channel.send('Emojinin ismini belirlemedin')


    guild.emojis.create(`${link}`, `${isim}`)
        .then(emoji =>
         message.channel.send(`${isim} ismiyle yeni bir emoji oluşturuldu`))
         message.react('<a:cd12:739729757574397983>')
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['addemoji', 'emojioluştur' , 'emoji-yükle' ,'emojiyükle'],
    permLevel: 0
}
exports.help = {
    name: 'emojiekle',
    description: 'Sunucuya emoji eklersiniz',
    usage: 'emojiekle <link> <isim>',
}