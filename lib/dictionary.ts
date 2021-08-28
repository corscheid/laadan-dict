import { existsSync, promises } from 'fs'
import { Word } from '../interfaces'

const { readFile } = promises

const laadan_dictionary_filepath = 'lib/dictionary_laadan-to-english_living.json'
const encoding = 'utf-8'

const checkDictFile = (): void => {
  if (!existsSync(laadan_dictionary_filepath)) {
    throw new Error('Could not load dictionary')
  }
}

/** GET /api/all */
export const getAllWords = async (): Promise<Word[]> => {
  checkDictFile()
  const json = await readFile(laadan_dictionary_filepath, encoding)
  const results: Word[] = JSON.parse(json)
  return results
}

/** GET /api/search/:word */
export const getWordsByName = async (name: string): Promise<Word[]> => {
  checkDictFile()
  const json = await readFile(laadan_dictionary_filepath, encoding)
  const dictionary: Word[] = JSON.parse(json)
  const results = dictionary
    .filter(word => word.laadan.indexOf(name) !== -1 || word.english.indexOf(name) !== -1)
  return results
}