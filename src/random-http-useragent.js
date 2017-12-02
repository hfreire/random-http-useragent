/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

const _ = require('lodash')
const Promise = require('bluebird')

const memoizee = require('memoizee')

const createReadStream = require('fs').createReadStream
const path = require('path')

const USERAGENTS_FILE = path.join(__dirname, '/../share/user-agents.txt')
const TOTAL_USERAGENTS = 899

const readLineNumber = (number, callback) => {
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

    /* istanbul ignore else  */
    if (lines.length >= number) {
      stream.destroy()

      const line = lines[ number ]

      callback(null, line)
    } else {
      d = new Array(lines.length).join('\n')
    }
  })

  stream.on('error', (error) => callback(error))
  stream.on('end', () => callback(new Error('EOF reached without finding an user-agent')))
}

const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const readRandomLine = () => {
  return new Promise((resolve, reject) => {
    const number = generateRandomNumberBetween(0, TOTAL_USERAGENTS - 1)

    readLineNumber(number, (error, userAgent) => {
      if (error) {
        return reject(error)
      }

      resolve(userAgent)
    })
  })
}

const defaultOptions = {
  promise: true,
  memoizee: {}
}

class RandomHttpUserAgent {
  constructor (options = {}) {
    this.configure(options)
  }

  configure (options = {}) {
    this._options = _.defaultsDeep({}, options, defaultOptions)

    this._cachedReadRandomLine = memoizee(readRandomLine, _.get(this._options, 'memoizee'))
  }

  get () {
    return _.has(this._options, 'memoizee.maxAge') ? this._cachedReadRandomLine() : readRandomLine()
  }
}

module.exports = new RandomHttpUserAgent()
