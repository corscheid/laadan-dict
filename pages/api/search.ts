// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

/**
 * GET /api/search
 * Default search results
 *
 * @param _req Next API Request (not used)
 * @param res Next API Response
 */
const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json([])
}

export default handler