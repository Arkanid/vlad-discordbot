const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.on('ready', () => {
  console.log(`Su adla giris yapildi >> ${client.user.tag}!`);
  client.user.setActivity("developed by Arkanid");
});

client.on('guildMemberAdd', member => {
const channel = member.guild.channel.find(ch => ch.name === 'member-log');
if(!channel) return;
channel.send(`Welcome to the server, ${member}!`)

});


client.on('message', message => {
if (message.content === `${prefix}server`) { 
	message.channel.send(`This server's name is:  ${message.guild.name}`);
	}
});

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'write') {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } 
});


/*
client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'kick') {
  	const user = message.guild.member(message.author);
  	if (user.hasPermission(['KICK_MEMBERS'])) {
    let reason = args.join(" ");
    const member = message.guild.member(etiketlenmiskisi);
    message.channel.send(`${message.author} took her/his kickhammer!`);
    message.channel.send('https://tenor.com/view/sao-liz-lisbeth-anime-ban-gif-14368031');
    member.kick(reason);
    message.channel.send(`${etiketlenmiskisi} kicked successfully.`);
  }} else if (!user.hasPermission(['KICK_MEMBERS'])) {
  	message.channel.send(`${message.author}, you can't kick a member in this guild.`);
  }

});

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'ban') {
  	const user = message.guild.member(message.author);
  	if (user.hasPermission(['BAN_MEMBERS'])) {
    const etiketlenmiskisi = message.mentions.users.first();
    let reason = args.join(" ");
    const member = message.guild.member(etiketlenmiskisi);
    message.channel.send(`${message.author} took her/his banhammer!`);
    message.channel.send('https://tenor.com/view/sao-liz-lisbeth-anime-ban-gif-14368031');
    member.ban(reason);
    message.channel.send(`${etiketlenmiskisi} banned successfully.`);
  }} else if (!user.hasPermission(['BAN_MEMBERS'])){
  	message.channel.send(`${message.author}, you can't ban a member in this guild.`);
  }

});
*/

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;
 
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'clear') {
    let sayi = args.join(" ");
    message.channel.bulkDelete(sayi);
    message.channel.send(`${message.author} deleted ${sayi} messages.`);
  } 
});


client.on("message", message => {
	if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'dice'){
  message.channel.send(`${message.author} rolled a dice and got ${Math.floor(Math.random()*6+1)}. 🎲`);
	}
});

client.on("message", message => {
	if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command === 'info'){
  message.reply(`Wait for server details. ⌛`);
  message.channel.send(`Server Name: ${Guild.Name}.`);
  message.channel.send(`Owner: ${Guild.owner}.`);
  message.channel.send(`Member Count: ${Guild.memberCount}.`);
  message.channel.send(`Server's Region: ${Guild.Region}.`);
}
});


client.on("message", message => {
	if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const etiket = message.mentions.users.first()
  const saldiri1 = Math.floor(Math.random()*10+1)
  const saldiri2 = Math.floor(Math.random()*10+1)


  if(command === 'vs'){
  message.channel.send(`${message.author} and ${etiket} going a war! ⚔️`);
  message.channel.send(`${message.author} hit ${saldiri1}. 🩸`);
  message.channel.send(`${etiket} hit ${saldiri2}. 🩸`);
  if(saldiri1 > saldiri2){
  	message.channel.send(`${message.author} won that war.`);
  } else if(saldiri1 == saldiri2){
  	message.channel.send(`${message.author} and ${etiket} hit same points.`);
  	message.channel.send(`That so rarely... Try again.`);
  } else {
  	message.channel.send(`${etiket} won that war.`);
  }
	}
});

client.on("message", async (message) => {
	if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'btc'){
  let getBtc = async () => {
  	let response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/usd.json');
  	let btc = response.data;
  	return btc;
  };
  let btcx = await getBtc();
  console.log(btcx);
  message.reply(`Did you want details about BTC ?`);
  message.reply(`Price: ${btcx.bpi.USD.rate} $`);


 	}
});


client.login(token);