import chai from "chai"
import words from "../../src/words.js"
import difference from "../../src/difference.js"
import toFinite from "../../src/toFinite.js";
import ceil from "../../src/ceil.js";
import capitalize from "../../src/capitalize.js";
import map from "../../src/map.js";
import add from "../../src/add.js";
import compact from "../../src/compact.js";
import slice from "../../src/slice.js";
import reduce from "../../src/reduce.js";

let res;
let expectetRes;

describe('String manipulations', function() {
    it('Finding the missing word', function() {
        var a = "The quick brown fox jumps over the lazy dog"
        var b = "brown jumps the The dog lazy over quick"

        var a_words = words(a)
        var b_words = words(b)

        res = difference(a_words, b_words)[0]
        expectetRes = 'fox'
        chai.assert.equal(res, expectetRes)
    })

    it('Finding the missing word - harder', function() {
        var a = "The quicK Brown fox JUMPS oVEr the laZy dOg"
        var b = "brOwN jUmps The The dog lAzY OVer qUIck"

        var a_words = words(a)
        var b_words = words(b)

        a_words = map(a_words, capitalize)
        b_words = map(b_words, capitalize)

        res = difference(a_words, b_words)[0]
        expectetRes = 'Fox'
        chai.assert.equal(res, expectetRes)
    })
});

describe("Mathematical operations", function() {
    it('Casting from string and taking the ceiling', function() {
        var a = "1.2"
        res = ceil(toFinite(a))
        expectetRes = 2
        chai.assert.equal(res, expectetRes)
    })

    it('Using operations nested together', function() {
        res = ceil(add(ceil(11.0000001), 8.16))
        expectetRes = 21
        chai.assert.equal(res, expectetRes)
    })
})

describe("Array manipulations", function() {
    it('Cleaning undefined got from "slice" function', function() {
        res = slice([1, 2, 3, 4], 2, 7) // => [3, 4, undefined, undefined, undefined]
        res = compact(res) // => [3, 4]
        expectetRes = [3, 4]
        chai.assert.sameDeepOrderedMembers(res, expectetRes)
    })

    it("Giving 50 % payrise to everybody in employee-object and calculatin mean", function() {
        const multiplier = 1.5;
        var employees = [ 
            {name: "Johnson", surname: "Guvnor", wage: 2500}, 
            {name: "Dan", surname: "Madley", wage: 2700},
            {name: "Emily", surname: "Clarkson", wage: 3000}
        ]
        res = map(employees, (person) => {
            person.wage = person.wage * multiplier
            return person;
        })

        chai.assert.equal(res[0].wage, 3750)
        chai.assert.equal(res[1].wage, 4050)
        chai.assert.equal(res[2].wage, 4500)

        var wageRes = reduce(res, (result, person) => [result[0]+person.wage, result[1]+1], [0,0])
        var wageMean = wageRes[0] / wageRes[1]

        chai.assert.equal(wageMean, (3750+4050+4500)/3)
    })
})

