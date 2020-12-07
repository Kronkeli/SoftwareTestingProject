import chai from "chai"
import at from "../../src/at.js"

describe("at should give object { 'a': [{ 'b': { 'c': 3 } }, 4] } values according to path", function () {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    it(" path ['a[0].b.c', 'a[1]'] => [3,4] ?", function () {
        chai.assert.sameOrderedMembers(at(object, ['a[0].b.c', 'a[1]']), [3, 4]);
    });
    it("indexing over and path does not exist ['a[3]','a.c' ] ", function () {
        chai.assert.sameDeepOrderedMembers(at(object, ['a[3]', 'a.c', 'a[0].b']), [undefined, undefined, { "c": 3 }])
    });
    it("faulty path parameter at(object, 55) => [undefined] ?", function () {
        chai.assert.deepEqual(at(object, 55), [undefined])
    })
    it("faulty object parameter at('asdmg', [a.b])", function () {
        chai.assert.deepEqual(at('asdmg', ['a.b', 'a[2].c']), [undefined, undefined])
    })
});

