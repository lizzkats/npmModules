const { expect } = require('chai')
const isArray = require('../src/isarray')

describe('isArray', function() {
  it('is an array', function() {
    expect(isArray([])).to.equal(true)
  })
})
