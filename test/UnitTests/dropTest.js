import chai from "chai"
import drop from "../../src/drop.js"

describe('drop Tests', function () {
    it('drop([1,2,3]) => [2, 3] ?', function () {
        chai.assert.sameOrderedMembers(drop([1, 2, 3]), [2, 3])
    })
    it('drop([1,2,3], 2) => [3] ?', function () {
        chai.assert.sameOrderedMembers(drop([1, 2, 3], 2), [3])
    })
    it('drop([1,2,3],5) => [] ?', function () {
        chai.assert.sameOrderedMembers(drop([1, 2, 3], 5), [])
    })
    it('drop([1,2,3],0) => [1,2,3] ?', function () {
        chai.assert.sameOrderedMembers(drop([1, 2, 3], 0), [1, 2, 3])
    })
    it("drop([{'a': 'aa'}, {'b': 'bb'}, {'c': 'cc'}], 2) => [{'c': 'cc'}] ?", function () {
        chai.assert.sameDeepOrderedMembers(drop([{ 'a': 'aa' }, { 'b': 'bb' }, { 'c': 'cc' }], 2), [{ 'c': 'cc' }])
    })
})