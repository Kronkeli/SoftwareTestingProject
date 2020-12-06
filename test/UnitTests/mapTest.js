import chai from 'chai'
import map from '../../src/map.js'

let res;
let expectedRes;

describe('Map function Tests', function() {
    it('Testing examples', function(){
        function square(n) { return n * n }
        res = map([4, 8], square)
        expectedRes = [16, 64]
        chai.assert.sameDeepOrderedMembers(res, expectedRes, 'Squaring array [4, 8]')
    });

    it("Testing with object, that has negative 'length' properity", function() {
        function square(n) { return n * n }
        let fakearray = {length: -1}
        chai.assert.doesNotThrow(map(fakearray,square), Error)
    }) 
});