import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
import { createConnection } from 'typeorm'

import { Telegraf, Markup, Telegram, Scenes, session } from 'telegraf'
import { startScene } from './start/start.controller'
import { CMD, HOURS, TXT } from './constants'
import { errorHandler } from './utils/errorHandler'
import { Update } from 'typegram'

async function main() {
  const db = await createConnection()

  const token = process.env.BOT_TOKEN

  const telegram = new Telegram(token!, {})

  const bot = new Telegraf<Scenes.SceneContext>(token!)

  const stage = new Scenes.Stage<Scenes.SceneContext>([startScene])

  bot.use(Telegraf.log())
  bot.use(session())
  bot.use(stage.middleware())

  bot.start((ctx) => {
    console.log('ctx:', ctx)

    return ctx.scene.enter('start')
  })

  bot.command(
    CMD.CHOOSE_TIME,
    (ctx) => ctx.reply(TXT.chooseHour, Markup.keyboard(HOURS, { columns: 4 })),

    bot.hears(HOURS, (ctx) => ctx.reply(`${TXT.sendAt} ${ctx.message.text}`))
  )

  bot.help((ctx) => ctx.reply(TXT.help))

  bot.launch()

  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

main()
