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
const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const result: Word[] = await getAllWords()
  res.status(200).json(result)
}

export default handler