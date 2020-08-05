const Discord = require("discord.js");
module.exports.run = async (bot, message) => {
	var emojis = message.guild.emojis.cache.array();
	if (!emojis || emojis === []) return message.reply("Sunucuya hiз emoji eklenmemiю!");
	if (emojis.length > 1) {
		var page = 1;
		var totalpages = emojis.length;
		var embed = new Discord.MessageEmbed()
			.setTitle("Sunucuya Eklenen Emojiler")
			.setDescription(`:${emojis[page - 1].name}:`)
			.setImage(emojis[page - 1].url)
			.setFooter(`Sayfa ${page}/${totalpages} | Emoji ID: ${emojis[page - 1].id}`)
			.setColor("BLUE");
		message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["👈", "👉"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			await sentEmbed.react(emojiArray[1]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 300000
			});
			reactions.on("collect", async function (reaction) {
				await reaction.remove(message.author);
				if (reaction.emoji.name === "👈") {
					if (page !== 1) {
						page = page - 1;
					} else {
						page = totalpages;
					}
				} else {
					if (page !== totalpages) {
						page = page + 1;
					} else {
						page = 1;
					}
				}
				embed = new Discord.MessageEmbed()
					.setTitle("Sunucuya Eklenen Emojiler")
					.setDescription(`:${emojis[page - 1].name}:`)
					.setImage(emojis[page - 1].url)
					.setFooter(`Sayfa ${page}/${totalpages} | Emoji ID: ${emojis[page - 1].id}`)
					.setColor("BLUE");
				sentEmbed.edit(embed).catch(function () { });
			});
			reactions.on("end", () => sentEmbed.edit("Etkileюimli komut sona erdi: 5 dakika geзti."));
		}).catch(() => {
			message.reply("Bu embed'i gцndermeye зalэюэrken bir hata oluюtu.").catch(() => {
				message.author.send(`Komut zaten зalэюmakta ${message.channel}`).catch(function () { });
			});
		});
	} else {
		let emojiembed = new Discord.MessageEmbed()
			.setTitle("Sunucuya Eklenen Emojiler")
			.setDescription(`:${emojis[0].name}:`)
			.setImage(emojis[0].url)
			.setFooter(`Sayfa ${1}/${1} | Emoji ID: ${emojis[0].id}`)
			.setColor("BLUE");
		message.channel.send(emojiembed);
	}
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojiler"],
  permLevel: 0
};
module.exports.help = {
  name: 'emoji',
  description: 'Sayfalэ emojiler',
  usage: 'emoji'
};