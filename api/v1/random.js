const fs = require('fs')
const path = require('path')

const list = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'memes.json'), 'utf-8'))

module.exports = (request, response) => {
  const random = list[Math.floor(Math.random() * list.length)]

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
        <img style="max-width: 100%;max-height: 100%;" src="${random}" alt="">
      </body>
      </html>
    `)
}
