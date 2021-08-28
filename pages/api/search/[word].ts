// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { Word } from '../../../interfaces'
import { getWordsByName } from '../../../lib/dictionary'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { word } = req.query
  if (typeof word === 'string') {
    const result: Word[] = await getWordsByName(word)
    res.status(200).json(result)
  }
}

export default handler