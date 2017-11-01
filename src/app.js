#!/usr/bin/env node

/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

process.on('uncaughtException', (error) => {
  console.error(error)

  process.exit(1)
})

process.on('unhandledRejection', (error) => {
  console.error(error)

  process.exit(1)
})

const { join } = require('path')

const program = require('commander')

const { version } = require(join(__dirname, '../package'))

program.version(version)

const RandomHTTPUserAgent = require('../lib')

RandomHTTPUserAgent.get()
  .then((userAgent) => {
    console.log(userAgent)
  })
  .catch((error) => console.error(error))
