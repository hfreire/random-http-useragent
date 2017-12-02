/*
 * Copyright (c) 2017, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

describe('Module', () => {
  let subject
  let RandomHttpUserAgent

  before(() => {
    RandomHttpUserAgent = td.object([])
  })

  afterEach(() => td.reset())

  describe('when loading', () => {
    beforeEach(() => {
      td.replace('../src/random-http-useragent', RandomHttpUserAgent)

      subject = require('../src/index')
    })

    it('should export random http useragent', () => {
      subject.should.be.equal(RandomHttpUserAgent)
    })
  })
})
