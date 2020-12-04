import chai from 'chai'
import slice from '../../src/slice.js'

let res;
let expectedRes;

describe('Slice function Tests', function() {
    it('Testing examples', function() {
        res = slice([1,2,3,4], 2)
        expectedRes = [3, 4]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    });

    it('Testing with object insted of array', function() {
        chai.assert.doesNotThrow(slice({length: -1}, 1, 2), Error)
    })

    const arr = [1, 2, 3, 4];

    it("Testing border cases - Too high 'end'", function() {
        res = slice(arr, 2, 6)
        expectedRes = [3, 4, undefined, undefined]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })

    it("Testing border cases - 'End' larger than 'start'", function() {
        res = slice(arr, 3, 1)
        expectedRes = []
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })

    it("Testing border cases - Negative 'start' with 'end' variable", function() {
        res = slice(arr, -2, 2)
        expectedRes = [1, 2] // As end in this case is 2 and not length.arr (=4) 
        chai.assert.sameDeepOrderedMembers(res, expectedRes, "In this case 'end' is 2 and not length.arr (=4). The offset should take arr index 0 and 1")
    })

    it("Testing border cases - Negative 'end'", function() {
        res = slice(arr, 0, -2)
        expectedRes = [1, 2]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })
});