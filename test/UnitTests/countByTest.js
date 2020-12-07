import chai from "chai"
import countBy from "../../src/countBy.js"

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]

describe('countBy Tests', function () {
    it("testing example object => { 'true' : 2, 'false': 1 }", function () {
        chai.assert.deepEqual(countBy(users, value => value.active), { 'true': 2, 'false': 1 })
    })
    it("returns empty object with empty object input", function () {
        chai.assert.deepEqual(countBy({}), {})
    })
})