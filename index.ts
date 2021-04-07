import { Telegraf} from "telegraf";

// Instantiate a new Bot
const bot = new Telegraf('1696295064:AAEaXs9W_4m-sg9wvfnMVL-upMB1CnVOMl4')

// Listen to the /start command
bot.command('start', (ctx) => ctx.reply(`Hello ${ctx.message.from.first_name}`))

// Launch the Bot
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))