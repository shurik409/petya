const { Command } = require('discord.js-commando');

module.exports = class DMsayCommand extends Command {
    constructor(client){
        super(client,{
            name: 'кхе',
            group: 'group2',
            memberName: 'кхе',
            description: 'Скажи боту попиздеть с тобой',
            examples: ['кхе @User Пересдача'],
            args: [
                {
                    key: 'user',
                    prompt: 'Кого бы послать?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'Как будет послан этот нехороший человек?',
                    type: 'string'
                }
            ]
        });
    }
    
    run(msg, { user, content } ){
        msg.delete();
        return user.send(content);
    }
};