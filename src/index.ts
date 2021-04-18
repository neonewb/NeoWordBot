require('dotenv').config()
import express from 'express'
import './bot/bot'
import { wordRouter } from './routes/word.routes'

const PORT = process.env.PORT

// bot.telegram.setWebhook('https://----.loca.lt')

const app = express()

app.use(express.json())
app.use('/api', wordRouter)
// app.use(bot.webhookCallback('/api'), wordRouter)

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
)
