import chai from "chai"
import filter from "../../src/filter.js"

const users = [
    { 'user': 'barney', 'active': true, 'city': 'Tampere' },
    { 'user': 'fred', 'active': false, 'city': 'Tampere' }
]

describe("filter Tests, const users = [{ 'user': 'barney', 'active': true}, { 'user': 'fred', 'active': false }]", function () {
    it("filter(users, ({ active }) => active) => objects for ['barney']'", function () {
        chai.assert.sameDeepMembers(filter(users, ({ active }) => active), [{ 'user': 'barney', 'active': true, 'city': 'Tampere' }])
    })
    it("filter(users, ({ city }) => 'Tampere') => objects for 'barney' and 'fred'", function () {
        chai.assert.sameDeepMembers(filter(users, ({ city }) => 'Tampere'), users)
    })
})