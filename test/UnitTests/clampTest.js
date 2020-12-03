import chai from "chai"
import clamp from "../../src/clamp.js"

describe('clamp Tests', function () {
    it('clamp(-10, -5, 5) => -5 ?', function () {
        chai.assert.equal(clamp(-10, -5, 5), -5)
    })
    it('clamp(10, -5, 5) => 5 ?', function () {
        chai.assert.equal(clamp(10, -5, 5), 5)
    })
})