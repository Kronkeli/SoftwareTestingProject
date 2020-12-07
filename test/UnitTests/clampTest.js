import chai from "chai"
import clamp from "../../src/clamp.js"

describe('clamp Tests', function () {
    it('clamp(-10, -5, 5) => -5 ?', function () {
        chai.assert.equal(clamp(-10, -5, 5), -5)
    })
    it('clamp(10, -5, 5) => 5 ?', function () {
        chai.assert.equal(clamp(10, -5, 5), 5)
    })
    it("WORKS with upper bound lower than lower bound", function () {
        chai.assert.equal(clamp(10, 6, 4), 6)
    })
    it("faulty parameters: first is null", function () {
        chai.assert.isNaN(clamp(null, -5, 5))
    })
    it("faulty parameters: first is NaN", function () {
        chai.assert.isNaN(clamp(NaN, -5, 5))
    })
})