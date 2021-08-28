import { existsSync, promises } from 'fs'
import { Word } from '../interfaces'

const { readFile } = promises

const laadan_dictionary_filepath = 'lib/dictionary_laadan-to-english_living.json'
const encoding = 'utf-8'

/**
 * Check existence of dictionary file
 */
const checkDictFile = (): void => {
  if (!existsSync(laadan_dictionary_filepath)) {
    throw new Error('Could not load dictionary')
  }
}

/**
 * GET all words
 * @returns array of all Words
 */
export const getAllWords = async (): Promise<Word[]> => {
  checkDictFile()
  const json = await readFile(laadan_dictionary_filepath, encoding)
  const words: Word[] = JSON.parse(json)
  const wordsWithId = words.map((result, id) => ({ ...result, id }))
  return wordsWithId
}

/**
 * Get Word by Id
 * @param id unique identifier of Word
 * @returns Word with given id
 */
export const getWordById = async (id: number): Promise<Word> => {
  checkDictFile()
  const allWords = await getAllWords()
  const result = allWords.filter(word => word.id === id)
  if (result.length < 1) {
    throw new Error("No result")
  }
  return result[0]
}

/**
 * Get Words by name
 * @param name Láadan or English search input
 * @returns array of matching Words
 */
export const getWordsByName = async (name: string): Promise<Word[]> => {
  checkDictFile()
  const allWords = await getAllWords()
  const results = allWords
    .filter(word => {
      if (word.laadan.toLowerCase() === name.toLowerCase()) return true
      if (word.english.toLowerCase() === name.toLowerCase()) return true
      const words = word.english
        .replace(';', '').replace(',', '').replace('.', '')
        .replace('(', '').replace(')', '')
        .split(' ')
      if (words.includes(name)) return true
      return false
    })
  return results
}