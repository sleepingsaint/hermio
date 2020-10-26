require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const botCommands = require('./commands/index');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

const token = process.env.BOT_TOKEN;

bot.on('message', msg => {

    if (msg.content.startsWith('$') && msg.author !== bot) {
        const args = msg.content.split(/ +/);
        const command = args.shift().toLowerCase();

        if (!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
    }
})

bot.once('ready', () => console.log('hermio up and running'));
bot.login(token);
