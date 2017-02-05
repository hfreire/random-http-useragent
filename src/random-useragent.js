/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Promise = require('bluebird')

const createReadStream = require('fs').createReadStream
const path = require('path')

const USERAGENTS_FILE = path.join(__dirname, '/../share/user-agents.txt')
const TOTAL_USERAGENTS = 899

const readLineNumber = (number, callback) => {
  const n = number

  const stream = createReadStream(USERAGENTS_FILE, {
    flags: 'r',
    encoding: 'utf-8',
    fd: null,
    mode: '0666',
    bufferSize: 64 * 1024
  })

  let d = ''
  stream.on('data', (data) => {
    d += data

    const lines = d.split('\n')

    if (lines.length >= +n) {
      stream.destroy()

      const line = lines[ +n ]
      if (!line) {
        throw new Error('Found empty line')
      }

      callback(null, line)
    } else {
      d = new Array(lines.length).join('\n')
    }
  })

  stream.on('error', (error) => callback(error))
  stream.on('end', () => callback(new Error('EOF reached without finding an user-agent')))
}

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class RandomUserAgent {
  static get () {
    return new Promise((resolve, reject) => {
      const number = getRandomNumberBetween(0, TOTAL_USERAGENTS - 1)

      readLineNumber(number, (error, userAgent) => {
        if (error) {
          return reject(error)
        }

        resolve(userAgent)
      })
    })
  }
}

module.exports = RandomUserAgent
