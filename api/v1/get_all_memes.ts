import { VercelRequest, VercelResponse } from '@vercel/node'

const fs = require('fs')
const path = require('path')

const list = JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/memes.json'), 'utf-8'))

export default (_request: VercelRequest, response: VercelResponse) => {
  response
    .status(200)
    .send(list)
}
