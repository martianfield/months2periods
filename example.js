'use strict'

let options = {
  language:'en',
  connector:' bis '
}
const m2p = require(__dirname + '/index.js')

let months = [1, 2, 11, 12]

console.log(m2p(months, options).periods)