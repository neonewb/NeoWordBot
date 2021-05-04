import { getRandomNumber } from '../utils/random'
import wordService from './word.service'

class WordController {
  async addWord(word: string) {
    try {
      const newWord = await wordService.addWord(word)
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

  async getWord(id: number) {
    try {
      const word = await wordService.getWord(id)
      return word
    } catch (error) {
      console.error(error)
    }
  }

  async getRandomWord() {
    try {
      const id = getRandomNumber(1, 9895)
      const word = await wordService.getWord(id)
      return word
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
