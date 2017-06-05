/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('Random HTTP User-Agent', () => {
  let subject
  let memoizee

  before(() => {
    memoizee = td.function()
  })

  afterEach(() => td.reset())

  describe('when configuring', () => {
    const maxAge = 10
    const options = { maxAge }
    const cachedReadRandomLine = td.function()

    beforeEach(() => {
      td.replace('memoizee', memoizee)
      td.when(memoizee(), { ignoreExtraArgs: true }).thenReturn(cachedReadRandomLine)

      subject = require('../src/random-http-useragent')
    })

    it('should memoizee read random line function', () => {
      td.verify(memoizee(), { ignoreExtraArgs: true, times: 1 })
    })

    it('should memoizee with a max age of 10 milliseconds', () => {
      const captor = td.matchers.captor()

      subject.configure(options)

      td.verify(memoizee(td.matchers.anything(), captor.capture()), { ignoreExtraArgs: true })

      const _options = captor.value

      _options.should.have.property('maxAge')
      _options.maxAge.should.be.equal(maxAge)
    })
  })

  describe('when getting a random http user-agent', () => {
    const maxAge = 10
    const options = { maxAge }

    before(() => {
      subject = require('../src/random-http-useragent')
    })

    it('should fulfill promise', () => {
      const result = subject.get()

      return result.should.be.fulfilled
    })

    it('should be a string', () => {
      return subject.get()
        .then((userAgent) => {
          userAgent.should.be.a('string')
        })
    })

    it('should cache result for 10 milliseconds', () => {
      subject.configure(options)

      return subject.get()
        .then((firstUserAgent) => {
          return subject.get()
            .then((secondUserAgent) => {
              firstUserAgent.should.be.equal(secondUserAgent)
            })
            .delay(10)
            .then(() => subject.get())
            .then((thirdUserAgent) => {
              firstUserAgent.should.not.be.equal(thirdUserAgent)
            })
        })
    })
  })

  describe('when getting multiple random http user-agents', () => {
    before(() => {
      subject = require('../src/random-http-useragent')

      subject.configure()
    })

    it('should be different', () => {
      return subject.get()
        .then((firstUserAgent) => {
          return subject.get()
            .then((secondUserAgent) => {
              firstUserAgent.should.not.be.equal(secondUserAgent)
            })
        })
    })
  })
})
