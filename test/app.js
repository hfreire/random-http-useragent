/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('app', () => {
  let subject // eslint-disable-line no-unused-vars
  let commander
  let RandomHTTPUserAgent
  let log
  let error

  beforeEach(() => {
    commander = td.replace('commander', td.object([ 'version' ]))

    RandomHTTPUserAgent = td.replace('../lib', td.object([ 'get' ]))
  })

  afterEach(() => {
    td.reset()
  })

  describe('when returning random user-agent', () => {
    const userAgent = 'my-user-agent'

    beforeEach(() => {
      td.when(RandomHTTPUserAgent.get()).thenResolve(userAgent)
    })

    afterEach(() => {
      delete require.cache[ require.resolve('../src/app') ]
    })

    it('should set commander version', (done) => {
      log = console.log
      console.log = td.function()

      subject = require('../src/app')

      td.verify(commander.version(), { times: 1, ignoreExtraArgs: true })

      setTimeout(() => {
        console.log = log

        done()
      }, 10)
    })

    it('should get a random user-agent', (done) => {
      log = console.log
      console.log = td.function()

      subject = require('../src/app')

      td.verify(RandomHTTPUserAgent.get(), { times: 1 })

      setTimeout(() => {
        console.log = log

        done()
      }, 10)
    })

    it('should write user-agent to stdout', (done) => {
      log = console.log
      console.log = td.function()

      subject = require('../src/app')

      setTimeout(() => {
        td.verify(console.log(userAgent), { times: 1 })

        console.log = log

        done()
      }, 10)
    })
  })

  describe('when failing to return random user-agent', () => {
    const _error = new Error('my-error-message')

    beforeEach(() => {
      td.when(RandomHTTPUserAgent.get()).thenReject(_error)
    })

    afterEach(() => {
      delete require.cache[ require.resolve('../src/app') ]
    })

    it('should write error to stderr', (done) => {
      error = console.error
      console.error = td.function()

      subject = require('../src/app')

      setTimeout(() => {
        td.verify(console.error(_error), { times: 1 })

        console.error = error

        done()
      }, 10)
    })
  })
})
