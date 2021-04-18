import { Telegraf, Markup } from 'telegraf'
import { CMD, CMDA, HOURS, TXT } from './constants/constants'
require('dotenv').config()

const token = process.env.BOT_TOKEN

if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token)

bot.use(Telegraf.log())

bot.start((ctx) =>
  ctx.reply(TXT.greeting, Markup.keyboard(CMDA).resize())
)

bot.command(
  CMD.CHOOSE_TIME,
  (ctx) => ctx.reply(TXT.chooseHour, Markup.keyboard(HOURS, { columns: 4 })),

  bot.hears(HOURS, (ctx) => ctx.reply(`${TXT.sendAt} ${ctx.message.text}`))
)

bot.help((ctx) => ctx.reply(TXT.help))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
