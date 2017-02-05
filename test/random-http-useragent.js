/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('random-http-useragent', () => {
  let subject

  afterEach(() => {
    td.reset()
  })

  describe('when getting random user-agent', () => {
    before(() => {
      subject = require('../src/random-http-useragent')
    })

    it('should fulfill promise', () => {
      const result = subject.get()

      return result.should.be.fulfilled
    })

    it('should get user-agent', () => {
      return subject.get()
        .then((userAgent) => {
          userAgent.should.be.a('string')
        })
    })
  })
})
