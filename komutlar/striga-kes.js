const { MessageEmbed } = require('discord.js');
const config = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  
if(!["785629452532187214", "785629452532187213", "785629452532187212", "785629452532187211", "785629452532187215", "785629452532187210", "785629452532187208", "785629452532187207", "785629452532187206", "785629452515803166" ,"785629452515803165"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const kanal = message.member.voiceChannel
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)
 
   message.channel.send(new MessageEmbed().setDescription(`${member} Kullancısının ${message.author} Tarafından Bağlantısı Kesildi.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#7289D').setTimestamp()).then(x => x.delete({timeout: 10000}));
}
exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes"]
}

exports.help = {
name: "kes" 
}

//code creator: sadxmamy