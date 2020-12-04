import chai from "chai"
import get from "../../src/get.js"

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe("get Tests, const object = { 'a': [{ 'b': { 'c': 3 } }] }", function () {
    it("get(object, 'a[0].b.c') => 3 ?", function () {
        chai.assert.equal(get(object, 'a[0].b.c'), 3)
    })
    it("get(object, ['a', '0', 'b', 'c'])", function () {
        chai.assert.equal(get(object, ['a', '0', 'b', 'c']), 3)
    })
    it("get(object, 'a.b.c', 'default')", function () {
        chai.assert.equal(get(object, 'a.b.c', 'default'), 'default')
    })
})