import chai from "chai"
import keys from "../../src/keys.js";

let res;
let expectedRes;

describe('isTypedArray Tests', function() {
    it('Testing examples', function(){
        function Foo() {
            this.a = 1
            this.b = 2
        }
        res = keys(new Foo)
        expectedRes = ['a', 'b']
        chai.assert.sameDeepOrderedMembers(res, expectedRes, 'new Foo to have a and b')

        res = keys('hi')
        expectedRes = ['0', '1']
        chai.assert.sameDeepOrderedMembers(res, expectedRes, 'Test with basic string')
    })

    it('Custom tests', function() {
        var test = {
            a: 1,
            b: (x) => x + 2,
            c: "String", 
            d: true,
            e: {a2:2, b2: "Another String"},
            f: function Foo() {
                this.a3 = 3
                this.b3 = 5;
            }
        }
        res = keys(test)
        expectedRes = ['a', 'b', 'c', 'd', 'e', 'f']
        chai.assert.sameDeepOrderedMembers(res, expectedRes, 'Testing array with different types of properties')

        res = keys(1)
        expectedRes = []
        chai.assert.isEmpty(res, "Result for keys with integer")
    })
});