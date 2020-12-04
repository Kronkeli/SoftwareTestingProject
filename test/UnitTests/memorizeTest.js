import chai from 'chai'
import memorize from '../../src/memoize.js'

let res;
let expectedRes;

describe('Memorize function Tests', function() {
    it('Testing examples', function(){
        const object = {'a':1, 'b':2}
        const other = {'c':3, 'd':4}
        
        var values = function() {
            return arguments;
        };
        
        values = memorize(values);

        res = values(object)
        expectedRes = [1, 2]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)

        res = values(other)
        expectedRes = [3, 4]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)

        object.a = 2
        res = values(object)
        expectedRes = [1, 2]
        chai.assert.sameDeepOrderedMembers(res, expectedRes)

        values.cache.set(object, ['a', 'b'])
        res = values(object)
        expectedRes = ['a', 'b']
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    });

});