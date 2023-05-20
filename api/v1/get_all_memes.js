const fs = require('fs')
const path = require('path')

const list = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'memes.json'), 'utf-8'))

module.exports = (request, response) => {
  response
    .status(200)
    .send(list)
}
