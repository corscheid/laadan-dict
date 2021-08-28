// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { Word } from '../../interfaces'
import { getAllWords } from '../../lib/dictionary'

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const result: Word[] = await getAllWords()
  res.status(200).json(result)
}

export default handler