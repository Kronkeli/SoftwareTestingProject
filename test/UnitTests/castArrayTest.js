import chai from "chai"
import castArray from "../../src/castArray.js"

describe('Testing castArray', function () {
    it("castArray(1) => [1]?", function () {
        chai.assert.sameDeepOrderedMembers(castArray(1), [1])
    })
    it("castArray({ 'a': 1 }) => [{ 'a': 1 }]?", function () {
        chai.assert.sameDeepOrderedMembers(castArray({ 'a': 1 }), [{ 'a': 1 }])
    })
    it("castArray('abc') => ['abc']", function () {
        chai.assert.sameDeepOrderedMembers(castArray('abc'), ['abc'])
    })
    it("castArray(null) => [null]", function () {
        chai.assert.sameDeepOrderedMembers(castArray(null), [null])
    })
    it("castArray(undefined) => [undefined] ", function () {
        chai.assert.sameDeepOrderedMembers(castArray(undefined), [undefined])
    })
    it("castArray() => [] ", function () {
        chai.assert.sameDeepOrderedMembers(castArray(), [])
    })
    it("castArray([1,2,3]) = [1,2,3] (array will not be nested) ", function () {
        chai.assert.sameDeepOrderedMembers([1, 2, 3], [1, 2, 3])
    })
})