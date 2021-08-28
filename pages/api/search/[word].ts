// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { Word } from '../../../interfaces'
import { getWordsByName } from '../../../lib/dictionary'

/**
 * GET /api/search/:word
 * Get array of all words matching input query
 *
 * @param req Next API Request with query
 * @param res Next API Response containing array of all matching Words
 */
const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { word } = req.query
  if (typeof word === 'string') {
    const result: Word[] = getWordsByName(word)
    res.status(200).json(result)
  }
}

export default handler