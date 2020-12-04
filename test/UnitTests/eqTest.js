import chai from "chai"
import eq from "../../src/eq.js"

const object = { 'a': 1 }
const other = { 'a': 1 }

describe("eq Tests, with variables const object = { 'a': 1} and const other = { 'a': 1}", function () {
    it("Testing with two same objects: eq(object, object) => true ?", function () {
        chai.assert.isTrue(eq(object, object))
    })
    it('Testing with different objects that have the same key-value pair: eq(object, object) => true ?', function () {
        chai.assert.isFalse(eq(object, other))
    })
    it("eq('a', 'a' => true ?", function () {
        chai.assert.isTrue(eq('a', 'a'))
    })
    it("eq('a', Object('a') => false ?", function () {
        chai.assert.isFalse(eq('a', Object('a')))
    })
    it("eq(NaN, NaN) => true ?", function () {
        chai.assert.isTrue(eq(NaN, NaN))
    })
})