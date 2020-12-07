import chai from "chai"
import divide from "../../src/divide.js"

describe('division Tests', function () {
    it('divide(20,5) => 4 ?', function () {
        chai.assert.equal(divide(5, 20), 4)
    })
    it('divide(6,4) => 1.5 ?', function () {
        chai.assert.equal(divide(6, 4), 1.5)
    })
    it('divide(-6,12) => -0.5 ?', function () {
        chai.assert.equal(divide(-6, 12), -0.5)
    })
    it('division by zero should return NaN', function () {
        chai.assert.isNaN(divide(1, 0))
    })
})