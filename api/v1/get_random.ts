import { VercelRequest, VercelResponse } from '@vercel/node'
const fs = require('fs')
const path = require('path')

const list = fs.readdirSync(path.join(__dirname, '../../public/memes'))

export default (request: VercelRequest, response: VercelResponse) => {
  const random = (list[Math.floor(Math.random() * list.length)]).replace(/%/g, '%25')
  response.redirect(`https://cdn.jsdelivr.net/gh/blacktunes/hiiro-memes@master/public/memes/${random}`)
}
