const { expect } = require('chai')
const isObject = require('../src/isObject')

describe('isObject', function() {
  it('is an object', function() {
    expect(isObject({})).to.equal(true)
  })
})
