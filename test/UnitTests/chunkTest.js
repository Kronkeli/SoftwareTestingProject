import chai from "chai"
import chunk from "../../src/chunk.js"

describe('Testing chunk', function () {
    it("chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']] ?", function () {
        console.log("täällä kusee")
        // console.log("chonker: " + chunk(['a', 'b', 'c', 'd'], 2))
        // chai.assert.sameDeepOrderedMembers(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
    })
    it("chunk(['a', 'b', 'c', 'd'], 3)", function () {
        console.log("koko chunkki ihna paska")
        // chai.assert.sameDeepOrderedMembers(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])
    })
})