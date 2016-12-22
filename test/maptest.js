const { expect } = require('chai')
const map = require('../src/map')

describe('map', function() {
  it('calls a function on every element within an array and returns a mutated array', function() {
    expect(map([1,2])).to.eql([2,4])
  })
})
