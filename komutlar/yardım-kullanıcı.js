const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField(',pp','**Etiketlediğiniz kişinin avatarını atar. (etiketlemezseniz sizinkini atar)**')
    .addField(',davet ','**Botun davet linkini atar.**')
    .addField(',emoji','**Sunucudaki emojileri gösterir. #güncellenicek kendiniz tepki vererek şimdilik kullanabilirsiniz**')
    .addField(',havadurumu','**Güncel hava durumu verilerini tablo halinde gösterir.**')
    .addField (',korona','**Güncel korona verilerini tablo halinde gösterir.**')
    .addField (',hızlıçek','**Hızlı çekiliş yapar!**')
    .addField (',şifre','**Rastgele bir şifre atar!**')
    .addField (',çağır','**Bot sahibinden destek ister!**')
    .addField (',yetkilerim','**Sunucuda olan yetkilerinizi gösterir!**')
    .addField (',tavsiye','**Bota tavsiye yaparsınız**')
    .addField (',top','**En iyi 10 sunucuyu gösterir**')
    .addField (',sunucutanıt','**Destek sunucusunda sunucunuzu tanıtır!**')
    .addField (',goldcode','**Gold Code sitesine yazdığınız kodu yükler!**')
    .addField (',emojiyükle','**Linkini attığınız görseli sunucuya emoji olarak ekler!**')
    .addField (',bug','**Bottaki bugları sahibe bildirirsiniz!**')
    .addField (',afk','**Afk olursunuz!**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/avatars/731219163317534740/358cc8b29bfce79f0ed3a56f03630c76.webp') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y' , 'kul' , 'yardim'],
 permLevel: 0
};

exports.help = {
 name: 'kullanıcı'
};
//.addField ('','****')