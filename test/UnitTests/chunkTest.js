import chai from "chai"
import chunk from "../../src/chunk.js"

describe('Testing chunk', function () {
    it("chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']] ?", function () {
        chai.assert.sameDeepOrderedMembers(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
    })
    it("chunk(['a', 'b', 'c', 'd'], 3)", function () {
        chai.assert.sameDeepOrderedMembers(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])
    })
    it("works with empty array", function () {
        chai.assert.sameDeepMembers(chunk([]), [])
    })
    it("null input returns empty array", function () {
        chai.assert.sameDeepMemberschunk(null(), [])
    })
})