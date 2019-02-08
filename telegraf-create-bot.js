const Telegraf = require('telegraf');
const bot = new Telegraf('759428716:AAFnUCPXUr_RIRwtL2fCPAs8PMn_Oz4EEzw');

bot.start((ctx) => ctx.reply('Добро пожаловать!'));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch();