const { expect } = require('chai')
const concat = require('../src/concat')

describe('concat()', () => {
  it('should add two strings', () => {
    console.log('bobtom', concat('bob','tom'));
    expect(concat('bob','tom')).to.equal('bobtom')
  })
})
