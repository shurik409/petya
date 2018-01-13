const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client,{
            name: 'сбалаболь',
            aliases: ['вякни','гав'],
            group: 'group2',
            memberName: 'сбалаболь',
            description: 'Replies with the text you provide.',
            examples: ['say Тима петуч'],
           /* throttling: {
                usages: 1,
                duration: 10
            },*/
            args: [
            {
                key: 'text',
                prompt: 'Можешь сказать боту послать кого-то',
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