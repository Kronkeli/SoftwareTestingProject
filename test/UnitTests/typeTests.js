import chai from "chai"
import isArguments from "../../src/isArguments.js";
import isArrayLike from "../../src/isArrayLike.js";
import isArrayLikeObject from "../../src/isArrayLikeObject.js";
import isBuffer from "../../src/isBuffer.js";
import isObject from "../../src/isObject.js";
import isObjectLike from "../../src/isObjectLike.js";
import isDate from "../../src/isDate.js"
import isEmpty from "../../src/isEmpty.js";
import isLength from "../../src/isLength.js";
import isSymbol from "../../src/isSymbol.js";
import isTypedArray from "../../src/isTypedArray.js";

let res;

describe('isObject Tests', function() {
    it('Testing examples', function(){
        res = isObject({})
        chai.assert.isTrue(res, "Empty JS-Object");

        res = isObject([1,2,3])
        chai.assert.isTrue(res, "Array");

        res = isObject(Function)
        chai.assert.isTrue(res, "Testing for function");

        res = isObject(null)
        chai.assert.isFalse(res, "Testing for null");
    });

    it('Testing custom object', function() {
        let aasi = {jalat: 4, nimi: "Hemlo"}
        res = isObject(aasi);
        chai.assert.isTrue(res, "Testing for aasi");
    });

    it('Testing random cases', function() {
        res = isObject(true);
        chai.assert.isFalse(res, "Testing for boolean");

        res = isObject(undefined);
        chai.assert.isFalse(res, "Testing for undefined");
    });
});

describe('isObjectLike Tests', function() {
    it('Testing examples', function(){
        res = isObjectLike({})
        chai.assert.isTrue(res, "Empty JS-Object");

        res = isObjectLike([1,2,3])
        chai.assert.isTrue(res, "Array");

        res = isObjectLike(Function)
        chai.assert.isFalse(res, "Testing for function");

        res = isObjectLike(null)
        chai.assert.isFalse(res, "Testing for null");
    });
});

describe('isArguments Tests', function() {
    it('Testing examples', function(){
        res = isArguments(function() {return arguments}() )
        chai.assert.isTrue(res, "Function argument");

        res = isArguments([1,2,3])
        chai.assert.isFalse(res, "Testing with bare array");
    });

    it('Testing arrow function', function() {
        res = isArguments((...args) => args)
        chai.assert.isFalse(res, "Arrow function");
    });
});

describe('isArrayLike Tests', function() {
    it('Testing examples', function(){
        res = isArrayLike([1, 2, 3])
        chai.assert.isTrue(res, "Testing with bare array");

        res = isArrayLike('abc')
        chai.assert.isTrue(res, "Testing with bare string");

        res = isArrayLike(Function)
        chai.assert.isFalse(res, "Testing with bare function");
    })

    it('Testing with custom created object', function() {
        let tmp = {a: 1, length: 1}
        res = isArrayLike(tmp)
        chai.assert.isTrue(res, "Object has a length parameter")

        tmp = {a: 1, b: 1}
        res = isArrayLike(tmp)
        chai.assert.isFalse(res, "Object doesn't have a length parameter")
    })
    it('Testing with functions', function() {
        var myfun = function() { return {a: 1, length: 1}}
        res = isArrayLike(myfun)
        chai.assert.isFalse(res, "Testing with bare function")

        res = isArrayLike(myfun())
        chai.assert.isTrue(res, "Function, that returns object with length properity")

        var myfun = function() { return [1, 2, 3]}
        res = isArrayLike(myfun)
        chai.assert.isFalse(res, "Testing with bare function")

        res = isArrayLike(myfun())
        chai.assert.isTrue(res, "Function that returns array")
    })
});

describe('isArrayLikeObject Tests', function() {
    it('Testing examples', function(){
        res = isArrayLikeObject([1, 2, 3])
        chai.assert.isTrue(res, "Testing with bare array");

        res = isArrayLikeObject('abc')
        chai.assert.isFalse(res, "Testing with bare string");

        res = isArrayLikeObject(Function)
        chai.assert.isFalse(res, "Testing with bare function");
    })
});

describe('isBuffer Tests', function() {
    it('Testing examples', function(){
        var tmp = new Buffer(2)
        res = isBuffer(tmp)
        chai.assert.isTrue(res, "Testing with new Buffer(2)");

        res = isBuffer(new Uint8Array(2))
        chai.assert.isFalse(res, "Testing with Uint8Array");
    })

    it("Allocating buffer with method 'alloc'", function() {
        var tmp = new Buffer.alloc(2)
        res = isBuffer(tmp)
        chai.assert.isTrue(res, "Testing with preallocated buffer");
    })
});

describe('isDate Tests', function() {
    it('Testing examples', function(){
        res = isDate(new Date)
        chai.assert.isTrue(res, "Testing with new Date class");

        res = isDate('Mon April 23 2012')
        chai.assert.isFalse(res, "Testing with string that is in format of date");
    })

    it('Custom testing', function() {
        var tmp = new Date(Date.parse("Mon April 23 2012"));
        res = isDate(tmp)
        chai.assert.isTrue(res, "Testing with date parsed from string");

        res = isDate({day: 5, month: 11, year: 2011})
        chai.assert.isFalse(res, "Testing with JS-Object with day, month and year parameters");
    })
});

describe('isEmpty Tests', function() {
    it('Testing examples', function(){
        res = isEmpty(null)
        chai.assert.isTrue(res, "Testing null");

        res = isEmpty(true)
        chai.assert.isTrue(res, "Testing boolean");

        res = isEmpty(1)
        chai.assert.isTrue(res, "Testing integer");

        res = isEmpty([1,2,3])
        chai.assert.isFalse(res, "Testing array");

        res = isEmpty('abc')
        chai.assert.isFalse(res, "Testing string");

        res = isEmpty({'a':1})
        chai.assert.isFalse(res, "Testing object");
    })

    it('Custom testing', function() {
        res = isEmpty([])
        chai.assert.isTrue(res, "Testing empty array");

        var tmp = {'a': 1}
        res = isEmpty(tmp)
        chai.assert.isFalse(res, "Testing with normal non-empty object");

        Object.defineProperty(tmp, 'a', {
            enumerable: false,
        })

        res = isEmpty(tmp)
        chai.assert.isTrue(res, "Same object, but properities enumerable is false");
        chai.assert.equal(tmp.a, 1) // Testing if object still has properity a
    })
});

describe('isLength Tests', function() {
    it('Testing examples', function(){
        res = isLength(3)
        chai.assert.isTrue(res, "Testing with integer");

        res = isLength(Number.MIN_VALUE)
        chai.assert.isFalse(res, "Testing with Number.MIN_VALUE");

        res = isLength(Infinity)
        chai.assert.isFalse(res, "Testing with Infinity");

        res = isLength('3')
        chai.assert.isFalse(res, "Testing with string 3");
    })

    it('Custom testing', function() {
        res = isLength(Number.MAX_SAFE_INTEGER + 1)
        chai.assert.isFalse(res, "Testing with number higher than the safe integer");
    })
});

describe('isSymbol Tests', function() {
    it('Testing examples', function(){
        res = isSymbol(Symbol.iterator)
        chai.assert.isTrue(res, "Testing with symbol iterator");

        res = isSymbol('abc')
        chai.assert.isFalse(res, "Testing with string");

    })
});

describe('isTypedArray Tests', function() {
    it('Testing examples', function(){
        res = isTypedArray(new Uint8Array)
        chai.assert.isTrue(res, "Testing with 8-bit unsigned int array");

        res = isTypedArray([])
        chai.assert.isFalse(res, "Testing normal empty array");
    })
});