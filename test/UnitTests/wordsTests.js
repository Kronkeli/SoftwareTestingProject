import chai from 'chai'
import words from '../../src/words.js'

let res;
let expectedRes;

describe('words function Tests', function() {
    it('Testing examples', function() {
        res = words('fred, barney & pebbles')
        expectedRes = ['fred', 'barney', 'pebbles'];
        chai.assert.sameDeepOrderedMembers(res, expectedRes)

        res = words('fred, barney, & pebbles', /[^, ]+/g)
        expectedRes = ['fred', 'barney', '&', 'pebbles']
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })

    it('Testing with more difficult regrex', function() {
        var string = 'It is wednessday my dudes'
        var patt = /[^, sd ]+/g; // All expect s or d

        res = words(string, patt)
        expectedRes = ['It', 'i', 'we', 'ne', 'ay', 'my', 'u', 'e'];
        chai.assert.sameDeepOrderedMembers(res, expectedRes)
    })
});