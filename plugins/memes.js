/* eslint-disable @typescript-eslint/no-empty-function */
const fs = require('fs-extra')
const path = require('path')

module.exports = class Memes {
  apply = (compiler) => {
    compiler.hooks.done.tap('memes', () => {
      const dist = path.join(__dirname, '../dist')

      fs.ensureDirSync(dist)

      const list = fs.readdirSync(path.join(__dirname, '../public/memes'))

      fs.writeJSONSync(path.join(dist, 'list.json'), list, { spaces: 2 })
    })
  }
}
