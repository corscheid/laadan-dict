// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { Word } from '../../interfaces'
import { getAllWords } from '../../lib/dictionary'

/**
 * GET /api/all
 * Get array of all Words
 *
 * @param _req Next API Request (not used)
 * @param res Next API Response containing array of all words
 */
const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  const result: Word[] = getAllWords()
  res.status(200).json(result)
}

export default handler