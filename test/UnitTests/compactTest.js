import chai from "chai"
import compact from "../../src/compact.js"

describe('compact Tests', function () {
    it("compact([0, 1, false, 2, '', 3]) => [1, 2, 3] ?", function () {
        // console.log("compactioa: " + compact([0, 1, false, 2, '', 3]))
        chai.assert.sameDeepOrderedMembers(compact([0, 1, false, 2, '', 3]), [1, 2, 3])
    })
})