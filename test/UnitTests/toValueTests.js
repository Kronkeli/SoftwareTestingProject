import chai from 'chai'
import toFinite from '../../src/toFinite.js'
import toInteger from '../../src/toInteger.js'
import toNumber from '../../src/toNumber.js'
import toString from '../../src/toString.js'

let res;
let expectedRes;

describe('toFinite function Tests', function() {
    it('Testing examples', function() {
        res = toFinite(3.2)
        expectedRes = 3.2
        chai.assert.strictEqual(res, expectedRes)

        res = toFinite(Number.MIN_VALUE)
        expectedRes = 5e-324
        chai.assert.strictEqual(res, expectedRes)

        res = toFinite(Infinity)
        expectedRes = 1.7976931348623157e+308
        chai.assert.strictEqual(res, expectedRes)

        res = toFinite('3.2')
        expectedRes = 3.2
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a unconvertable string", function() {
        res = toFinite('1.0t5')
        expectedRes = 0;
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a negative number", function() {
        res = toFinite('-1.5')
        expectedRes = -1.5;
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a strings", function() {
        res = toFinite("Infinity")
        expectedRes = 1.7976931348623157e+308;
        chai.assert.strictEqual(res, expectedRes, "String 'Infinity'")

        res = toFinite("Number.MIN_VALUE")
        expectedRes = Number.MIN_VALUE;
        chai.assert.strictEqual(res, expectedRes, "String 'Number.MIN_VALUE'")
    })
});

describe('toInteger function Tests', function() {
    it('Testing examples', function() {
        res = toInteger(3.2)
        expectedRes = 3
        chai.assert.strictEqual(res, expectedRes)

        res = toInteger(Number.MIN_VALUE)
        expectedRes = 0
        chai.assert.strictEqual(res, expectedRes)

        res = toInteger(Infinity)
        expectedRes = 1.7976931348623157e+308
        chai.assert.strictEqual(res, expectedRes)

        res = toInteger('3.2')
        expectedRes = 3
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a unconvertable string", function() {
        res = toInteger('1.0t5')
        expectedRes = 0;
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a negative number", function() {
        res = toInteger('-1.5')
        expectedRes = -1;
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a strings", function() {
        res = toInteger("Infinity")
        expectedRes = 1.7976931348623157e+308;
        chai.assert.strictEqual(res, expectedRes, "String 'Infinity'")
    })
});

describe('toNumber function Tests', function() {
    it('Testing examples', function() {
        res = toNumber(3.2)
        expectedRes = 3.2
        chai.assert.strictEqual(res, expectedRes)

        res = toNumber(Number.MIN_VALUE)
        expectedRes = 5e-324
        chai.assert.strictEqual(res, expectedRes)

        res = toNumber(Infinity)
        expectedRes = Infinity
        chai.assert.strictEqual(res, expectedRes)

        res = toNumber('3.2')
        expectedRes = 3.2
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a unconvertable string", function() {
        res = toNumber('1.0t5')
        chai.assert.isNaN(res)
    })

    it("Testing a negative number", function() {
        res = toNumber('-1.5')
        expectedRes = -1.5;
        chai.assert.strictEqual(res, expectedRes)
    })

    it("Testing a strings", function() {
        res = toNumber("Infinity")
        expectedRes = Infinity;
        chai.assert.strictEqual(res, expectedRes, "String 'Infinity'")
    })
});

describe('toString function Tests', function() {
    it('Testing examples', function() {
        res = toString(null)
        expectedRes = ''
        chai.assert.strictEqual(res, expectedRes, "Expecting null to give ''")

        res = toString(-0)
        expectedRes = '-0'
        chai.assert.strictEqual(res, expectedRes, "Expecting -0 to give '-0'")

        res = toString([1,2,3])
        expectedRes = '1,2,3'
        chai.assert.strictEqual(res, expectedRes, "Expecting [1,2,3] to give '1,2,3'")
    })

    it('Testing Infinity', function() {
        res = toString(Infinity)
        expectedRes = 'Infinity'
        chai.assert.strictEqual(res, expectedRes, "Expecting Infinity to give 'Infinity'")
    })

    it('Testing Infinity', function() {
        res = toString(0)
        expectedRes = '0'
        chai.assert.strictEqual(res, expectedRes, "Expecting 0 to give '0'")
    })

    it('Testing JS-Object', function() {
        res = toString({a:1, b:2})
        expectedRes = '{a:1, b:2}'
        chai.assert.strictEqual(res, expectedRes, "Expecting {a:1, b:2} to give '{a:1, b:2}'")
    })

    it('Testing function', function() {
        res = toString(() => 1+2)
        expectedRes = '() => 1+2'
        chai.assert.strictEqual(res, expectedRes, "Expecting () => 1+2 to give '() => 1+2'")
    })

});