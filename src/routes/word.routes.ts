import express from 'express'
import wordController from '../controller/word.controller'

export const wordRouter = express.Router()

wordRouter.get('/word', wordController.getWord)
