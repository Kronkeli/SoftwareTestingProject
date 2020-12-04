import chai from 'chai'
import reduce from '../../src/reduce.js'

let res;
let expectedRes;

describe('Reduce function Tests', function() {
    it('Testing examples', function() {
        res = reduce([1, 2], (sum, n) => sum + n, 0)
        expectedRes = 3;
        chai.assert.equal(res, expectedRes)

        res = reduce({ 'a': 1, 'b': 2, 'c': 1 },  (result, value, key) => { 
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {} )
        expectedRes = {'1': ['a', 'c'], '2': ['b']}

        chai.assert.deepEqual(res, expectedRes)
    });

    it("Using reduce to square every elemnt in container", function() {
        var col = [1, 2, 4, 8]
        var fun = (res, n) => { 
            res.push(n * n);
            return res 
        }
        var acc = []
        res = reduce(col, fun, acc);
        expectedRes = [1, 4, 16, 64]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })

});