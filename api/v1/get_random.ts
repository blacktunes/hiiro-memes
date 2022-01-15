import { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs-extra'
import path from 'path'

const list = fs.readJsonSync(path.join(__dirname, '../../dist/list.json'))

export default (request: VercelRequest, response: VercelResponse) => {
  const random = (list[Math.floor(Math.random() * list.length)]).replace(/%/g, '%25')
  response.redirect(`https://cdn.jsdelivr.net/gh/blacktunes/hiiro-memes@master/public/memes/${random}`)
}
