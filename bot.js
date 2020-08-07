const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env."NzQwODQzNDIxMDE0NTU2NzE1.Xyu6Mw.3L40SRuaK9q6inrp2IYT6Sq31tg");//BOT_TOKEN is the Client Secret
