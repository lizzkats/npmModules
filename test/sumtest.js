const { expect } = require('chai')
const sum = require('../src/sumexample')

describe('sum()', function() {
  it('should add two numbers', function() {
    expect(sum(1,2)).to.equal(3)
  })
})
