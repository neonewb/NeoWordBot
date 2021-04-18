import { db } from '../db/db'

class WordService {
  async addWord(word: string): Promise<string> {
    const newWord = await db.query('INSERT INTO word (word) VALUES ($1) RETURNING *', [word])
    return newWord.rows[0]
  }

  async getAllWords(): Promise<string[]> {
    const words = await db.query('SELECT * FROM word')
    return words.rows
  }

  async getWord(id: number): Promise<string> {
    const result = await db.query('SELECT * FROM word WHERE id = $1', [id])
    return result.rows[0]
  }

  async updateWord(id: number, newWord: string): Promise<string> {
    const word = await db.query('UPDATE word set word = $1 WHERE id = $2 RETURNING *', [newWord, id])
    return word.rows[0]
  }

  async deleteWord(id: number) {
    const deletedWord = await db.query('DELETE FROM word WHERE id = $1', [id])
    return deletedWord
  }
}

export default new WordService()
