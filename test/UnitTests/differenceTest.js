import chai from "chai"
import difference from "../../src/difference.js"

describe('difference Tests', function () {
    it('difference([2, 1], [2, 3]) => [1] ?', function () {
        chai.assert.sameOrderedMembers(difference([2, 1], [2, 3]), [1])
    })
    it('difference([], [2,3]) => ???', function () {
        chai.assert.sameMembers(difference([], [2, 3]), [])
    })
    it('difference([4,5,6], []) => ???', function () {
        chai.assert.sameOrderedMembers(difference([4, 5, 6], [4, 5, 6]), [])
    })
})