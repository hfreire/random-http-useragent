/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RandomHttpUserAgent = require('../src/random-http-useragent')

describe('Module', () => {
  let subject

  describe('when loading', () => {
    beforeEach(() => {
      subject = require('../src/index')
    })

    it('should export random http user-agent', () => {
      subject.should.be.equal(RandomHttpUserAgent)
    })
  })
})
