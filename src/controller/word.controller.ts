import { Request, Response } from 'express'
import wordService from '../service/word.service'

class WordController {
  async addWord(word: string) {
    try {
      const newWord =  await wordService.addWord(word)
      return newWord
    } catch (error) {
      console.error(error)
    }
  }

  async getAllWords() {
    try {
      const words = await wordService.getAllWords()
      return words
    } catch (error) {
      console.error(error)
    }
  }

  async getWord(req: Request, res: Response) {
    try {      
      const id = req.body.id as number
      const word = await wordService.getWord(id)
      res.json(word)
    } catch (error) {
      console.error(error)
    }
  }

  async updateWord(id: number, newWord: string) {
    try {
      const word = await wordService.updateWord(id, newWord)
      return word
    } catch (error) {
      console.error(error)
    }
  }

  async deleteWord(id: number) {
    try {
      const deletedWord = await wordService.deleteWord(id)
      return deletedWord
    } catch (error) {
      console.error(error)
    }
  }
}

export default new WordController()
