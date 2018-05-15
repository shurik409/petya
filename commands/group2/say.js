const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client,{
            name: 'скажи',
            aliases: ['скажи','гав'],
            group: 'group2',
            memberName: 'скажи',
            description: 'Replies with the text you provide.',
            examples: ['say Тима это тима'],
           /* throttling: {
                usages: 1,
                duration: 10
            },*/
            args: [
            {
                key: 'text',
                prompt: 'Можешь сказать боту сделать что-то',
                type: 'string'
            }
            ]
        });
    }
    run(msg, {text}){
        msg.delete();
        return msg.say(text);
    }
};
