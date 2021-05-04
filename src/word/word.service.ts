import { getRepository } from 'typeorm'
import { Word } from './word.model'

class WordService {
  wordRepo = getRepository(Word)

  async addWord(word: string): Promise<string> {
    const newWord = await this.wordRepo.create({ text: word })
    return newWord.text
  }

  async getAllWords(): Promise<Word[]> {
    const words = await this.wordRepo.find()
    return words
  }

  async getWord(id: number): Promise<string> {
    const result = await this.wordRepo.findOne(id)
    if (!result) return 'Word not found'
    return result.text
  }

  async updateWord(id: number, newWord: string): Promise<string> {
    const word = await this.wordRepo.update(id, { text: newWord })
    return word.raw
  }

  async deleteWord(id: number) {
    const deletedWord = await this.wordRepo.delete(id)
    return deletedWord
  }
}

export default new WordService()
