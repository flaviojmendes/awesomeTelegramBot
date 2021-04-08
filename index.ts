import { Telegraf} from "telegraf";
import {WeatherService} from "./services/weather.service";

// Instantiate a new Bot
const bot = new Telegraf('1696295064:AAEaXs9W_4m-sg9wvfnMVL-upMB1CnVOMl4')

// Listen to the /start command
bot.command('start', (ctx) => ctx.reply(`Hello ${ctx.message.from.first_name}`))

// Liste to the /weather command
bot.command('weather', async (ctx) => ctx.reply(await WeatherService.getWeather(ctx.message.text.replace('/weather ', ''))))

// Launch the Bot
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))