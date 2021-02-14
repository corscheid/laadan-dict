import { NextApiRequest, NextApiResponse } from 'next'
import { dictionaryData } from '../../../utils/dictionary'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(dictionaryData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(dictionaryData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
