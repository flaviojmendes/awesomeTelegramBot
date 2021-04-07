"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var bot = new telegraf_1.Telegraf('1696295064:AAEaXs9W_4m-sg9wvfnMVL-upMB1CnVOMl4');
bot.command('start', function (ctx) { return ctx.reply("Hello " + ctx.message.from.first_name); });
bot.launch();
// Enable gracefulstop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
