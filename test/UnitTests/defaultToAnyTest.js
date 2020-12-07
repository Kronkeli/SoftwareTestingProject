import chai from "chai"
import defaultToAny from "../../src/defaultToAny.js"

describe('defaultToAny Tests', function () {
    it('defaultToAny(1, 10, 20) => 1 ?', function () {
        chai.assert.equal(defaultToAny(1, 10, 20), 1)
    })
    it('defaultToAny(undefined, 10, 20) => 10 ?', function () {
        chai.assert.equal(defaultToAny(undefined, 10, 20), 10)
    })
    it('defaultToAny(undefined, null, 20) => 20', function () {
        chai.assert.equal(defaultToAny(undefined, null, 20), 20)
    })
    it('defaultToAny(undefined, null, NaN) => NaN ?', function () {
        chai.assert.isNaN(defaultToAny(undefined, null, NaN))
    })
    it('defaultToAny(null, NaN, 4) => 4 ?', function () {
        chai.assert.equal(defaultToAny(null, NaN, 4), 4)
    })
})