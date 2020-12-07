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
    it("faulty parameters: ending with null", function () {
        chai.assert.isFalse(endsWith('absdf', null))
    })
    it("checking end for empty string", function () {
        chai.assert.isFalse(endsWith('', 'd'))
    })
    it('end indexing greater then string length', function () {
        chai.assert.isFalse(endsWith('as', 'f', 10))
    })
})