import { Word } from '../interfaces'
import { dictionary_laadan } from './dictionary_laadan'

/**
 * GET all words
 * @returns array of all Words
 */
export const getAllWords = (): Word[] => {
  return dictionary_laadan
}

/**
 * Get Word by Id
 * @param id unique identifier of Word
 * @returns Word with given id
 */
export const getWordById = (id: number): Word => {
  const allWords = getAllWords()
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
export const getWordsByName = (name: string): Word[] => {
  const allWords = getAllWords()
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