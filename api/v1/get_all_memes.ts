import { VercelRequest, VercelResponse } from '@vercel/node'
const fs = require('fs')
const path = require('path')

const list = fs.readdirSync(path.join(__dirname, '../../public/memes'))

for (const i in list) {
  list[i] = `https://cdn.jsdelivr.net/gh/blacktunes/hiiro-memes@master/public/memes/${list[i]}`
}

export default (request: VercelRequest, response: VercelResponse) => {
  response
    .status(200)
    .send(list)
}
