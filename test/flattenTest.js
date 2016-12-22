const { expect } = require('chai')
const flatten = require('../src/flatten')

describe('flatten', function() {
  it('takes a nested array and returns the flattened array', function() {
    expect(flatten([1, 2, [3, 4]])).to.eql([1,2,3,4])
  })

  it('takes a deeply nested array and returns the flattened array', function() {
    expect(flatten([1, [2, 3], [4, [5, 6, [7, 8]]]])).to.eql([1,2,3,4,5,6,7,8])
  })
})
