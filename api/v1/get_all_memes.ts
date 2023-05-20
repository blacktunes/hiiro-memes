import { VercelRequest, VercelResponse } from '@vercel/node'

import { readFileSync } from 'fs'
import { join } from 'path'

const url = process.env.NODE_ENV === 'development'
  ? join(process.cwd(), 'public', 'memes.json')
  : join(process.cwd(), 'memes.json')
const list: string[] = JSON.parse(readFileSync(url, 'utf-8'))

export default (_request: VercelRequest, response: VercelResponse) => {
  response
    .status(200)
    .send(list)
}
