import chai from "chai"
import defaultTo from "../../src/defaultTo.js"

describe('defaultTo Tests', function () {
    it('defaultTo(1,10) => 1 ?', function () {
        chai.assert.equal(defaultTo(1, 10), 1)
    })
    it('defaultTo(undefined,10) => 10 ?', function () {
        chai.assert.equal(defaultTo(undefined, 5), 5)
    })
    it('defaultTo(null, 5 => 5 ?', function () {
        chai.assert.equal(defaultTo(null, 5), 5)
    })
    it('defaultTo(NaN,10) => 10 ?', function () {
        chai.assert.equal(defaultTo(NaN, 10), 10)
    })
})