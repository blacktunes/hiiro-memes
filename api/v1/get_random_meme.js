const fs = require('fs')
const path = require('path')

const list = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'memes.json'), 'utf-8'))

module.exports = (request, response) => {
  const random = list[Math.floor(Math.random() * list.length)]
  response.redirect(random)
}
