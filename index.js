const { CommandoClient } = require('discord.js-commando');

const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-',
    unknownCommandResponse: false,
    owner: '322403570274271233',
    disableEveryone: true
});
client.registry
    .registerDefaultTypes()
    .registerGroups([
		['group1', 'Our First Command Group'],
        ['group2', 'Our Second Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

	client.on('ready', () => {
		console.log('Logged in!');
		client.user.setGame('Чья-то мамка');
	});
	

	client.login("NDAwNjQyMTc3ODkxNDM0NTM2.DTemsQ.BIkf_Y4Bu8YJ874cJ9K_37-nk0E");
const Discord = require('discord.js');
const robot = new Discord.Client();
var name1 = 'Пет';
var name2 = 'Тим';
var name3 = 'Сан';
var name4 = 'Тох';
var name5 = 'Дот';

robot.on('guildMemberAvailable', member => {
	let guild = member.guild;
	if(member.user == robot.user){
		guild.defaultChannel.sendMessage("Кхе-Кхе");
	}
})

client.on('message',(message) => {
	if(message.content.toLowerCase().indexOf(name1.toLowerCase()) >= 0 && message.author != client.user){
		message.channel.sendMessage('Петя лох!');
		console.log("Petya");
	}
	if(message.content.toLowerCase().indexOf(name2.toLowerCase()) >= 0 && message.author != client.user){
		message.channel.sendMessage('Истеричный смех');
		console.log("Tima");
	}
	if(message.content.toLowerCase().indexOf(name3.toLowerCase()) >= 0 && message.author != client.user){
		message.channel.sendMessage('Ещё один пидор');
		console.log("Sanya");
	}
	if(message.content.toLowerCase().indexOf(name4.toLowerCase()) >= 0 && message.author != client.user){
		message.channel.sendMessage('Не лопата, а свистит');
		console.log("Toha");
	}
	if(message.content.toLowerCase().indexOf(name5.toLowerCase()) >= 0 && message.author != client.user){
		message.channel.sendMessage('Ооо,сейчас в жопу долбиться будут');
		console.log("Dota");
	}
	

});
/*robot.on('guildMemberSpeaking',(member,speaking) => {
	let guild = member.guild;
	if(member.speaking){
		console.log("ads");
		guild.defaultChannel.sendMessage(`${member.user.username} сейчас балаболит в канале ${member.voiceChannel.name}`);
	}
});*/
/*robot.on('voiceStateUpdate', (newMember,oldMember) => {
	//console.log("Add");
	let guilds = oldMember.guild;
	if(guilds.available){
		console.log("Yep");
		if(!oldMember.voiceChannel.connection.disconnect){
			//guilds.defaultChannel.sendMessage(`${oldMember.user.username} add to the ${oldMember.voiceChannel.name}!`);
			console.log(`Add,${oldMember.voiceChannel.name}`);
		}
		else{
			//guilds.defaultChannel.sendMessage(`${oldMember.user.username} exit from the ${oldMember.voiceChannel.name}!`);
			console.log("Exit");
		}
	}
	//guilds.defaultChannel.sendMessage(`${newMember.user.username} add to the channel!`)
});
*/