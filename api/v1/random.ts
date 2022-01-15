import { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs-extra'
import path from 'path'

const list = fs.readJsonSync(path.join(__dirname, '../../dist/list.json'))

export default (request: VercelRequest, response: VercelResponse) => {
  const random = (list[Math.floor(Math.random() * list.length)]).replace(/%/g, '%25')
  response.setHeader('Content-Type', 'text/html')
  response
    .status(200)
    .send(`
      <!DOCTYPE html>
      <html lang="en" style="height: 100%;">

      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>随机Hii图</title>
      </head>
      
      <body style="margin: 0px;background: #0e0e0e;height: 100%;display: flex;align-items: center;justify-content: center;">
        <img style="max-width: 100%;max-height: 100%;" src="https://cdn.jsdelivr.net/gh/blacktunes/hiiro-memes@master/public/memes/${random}" alt="">
      </body>
      
      </html>
    `)
}
