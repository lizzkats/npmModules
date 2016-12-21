const { expect } = require('chai')
const forEach = require('../src/forEach')

describe('forEach()', () => {
  it('should iterate over a collection and return the same collection', () => {
    console.log([1,2,3], forEach(1,2,3));
    expect(forEach([1,2,3])).to.equal(1,2,3)
  })
})
