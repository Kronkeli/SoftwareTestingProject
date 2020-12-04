import chai from "chai"
import endsWith from "../../src/endsWith.js"

describe('endsWith Tests', function () {
    it("endsWith('abc', 'c') => true ?", function () {
        chai.assert.isTrue(endsWith('abc', 'c'))
    })
    it("endsWith('abc', 'b') => false ?", function () {
        chai.assert.isFalse(endsWith('abc', 'b'))
    })
    it("endsWith('abc', 'b', 2) => true ?", function () {
        chai.assert.isTrue(endsWith('abc', 'b', 2))
    })
})