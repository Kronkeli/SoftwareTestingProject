import chai from 'chai'
import ceil from '../../src/ceil.js'

describe('Testing ceil', function () {
    it('ceil(4.006) => 5 ?', function () {
        chai.assert.equal(ceil(4.006), 5)
    })
    it('ceil(6.004, 2) => 6.01 ?', function () {
        chai.assert.equal(ceil(6.004, 2), 6.01);
    })
    it('ceil(6040, -2) => 6100 ?', function () {
        chai.assert.equal(ceil(6040, -2), 6100)
    })
    it('negative numbers: ceil(-1711.04, -2) => 1700 ?', function () {
        chai.assert.equal(ceil(-1751.04, -2), -1700)
    })
    it('negative numbers: ceil(-1711.04,-1) => 1750 ?', function () {
        chai.assert.equal(ceil(-1751.04, -1), -1750)
    })
    it('faulty parameters: first parameter is NaN', function () {
        chai.assert.isNaN(ceil(NaN))
    })
    it('faulty parameters: second parameter is NaN', function () {
        chai.assert.isNaN(ceil(NaN))
    })
})