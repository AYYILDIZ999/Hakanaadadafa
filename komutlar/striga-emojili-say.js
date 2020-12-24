const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["785629452532187214", "785629452532187213", "785629452532187212", "785629452532187211", "785629452532187215", "785629452532187210", "785629452532187208", "785629452532187207", "785629452532187206", "785629452515803166" ,"785629452515803165"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "785629452289179669"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:say0:791424150186098708>`,
'1': `<a:say1:791424117248229456>`,
'2': `<a:say2:791424149818048542>`,
'3': `<a:say3:791424151340580914>`,
'4': `<a:say4:791424149674917941>`,                       
'5': `<a:say5:791424149109211176>`,
'6': `<a:say6:791424149859467294>`,
'7': `<a:say7:791424147774242828>`,
'8': `<a:say8:791424145434345482>`,
'9': `<a:say9:791424122622181386>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:say0:791424150186098708>`,
'1': `<a:say1:791424117248229456>`,
'2': `<a:say2:791424149818048542>`,
'3': `<a:say3:791424151340580914>`,
'4': `<a:say4:791424149674917941>`,                       
'5': `<a:say5:791424149109211176>`,
'6': `<a:say6:791424149859467294>`,
'7': `<a:say7:791424147774242828>`,
'8': `<a:say8:791424145434345482>`,
'9': `<a:say9:791424122622181386>`}[d];})}

var taglılar = 0;
let tag = "☥";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {  
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:say0:791424150186098708>`,
'1': `<a:say1:791424117248229456>`,
'2': `<a:say2:791424149818048542>`,
'3': `<a:say3:791424151340580914>`,
'4': `<a:say4:791424149674917941>`,                       
'5': `<a:say5:791424149109211176>`,
'6': `<a:say6:791424149859467294>`,
'7': `<a:say7:791424147774242828>`,
'8': `<a:say8:791424145434345482>`,
'9': `<a:say9:791424122622181386>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:say0:791424150186098708>`,
'1': `<a:say1:791424117248229456>`,
'2': `<a:say2:791424149818048542>`,
'3': `<a:say3:791424151340580914>`,
'4': `<a:say4:791424149674917941>`,                       
'5': `<a:say5:791424149109211176>`,
'6': `<a:say6:791424149859467294>`,
'7': `<a:say7:791424147774242828>`,
'8': `<a:say8:791424145434345482>`,
'9': `<a:say9:791424122622181386>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("786187248357081099").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:say0:791424150186098708>`,
'1': `<a:say1:791424117248229456>`,
'2': `<a:say2:791424149818048542>`,
'3': `<a:say3:791424151340580914>`,
'4': `<a:say4:791424149674917941>`,                       
'5': `<a:say5:791424149109211176>`,
'6': `<a:say6:791424149859467294>`,
'7': `<a:say7:791424147774242828>`,
'8': `<a:say8:791424145434345482>`,
'9': `<a:say9:791424122622181386>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}