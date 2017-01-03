const { expect } = require('chai')
const concat = require('../src/concat')

describe('concat()', () => {
  it('should return an array with a length of 4', () => {
    expect(concat([1,2], [3,4]).length).to.equal(4)
  })
  it('should take multiple arguments', () => {
    expect(concat([1,2],[3,4],[5,6]).length).to.equal(6)
  })
})
