import { VercelRequest, VercelResponse } from '@vercel/node'

const fs = require('fs')
const path = require('path')

const list: string[] = JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/memes.json'), 'utf-8'))

export default (_request: VercelRequest, response: VercelResponse) => {
  const random = list[Math.floor(Math.random() * list.length)]
  response.redirect(random)
}
