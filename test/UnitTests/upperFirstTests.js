import chai from 'chai'
import upperFirst from '../../src/upperFirst.js'

let res;
let expectedRes;

describe('toFinite function Tests', function() {
    it('Testing examples', function() {
        res = upperFirst('fred')
        expectedRes = 'Fred'
        chai.assert.equal(res, expectedRes)

        res = upperFirst('FRED')
        expectedRes = 'FRED'
        chai.assert.equal(res, expectedRes)
    })

    it('Testing random string', function() {
        res = upperFirst('camelCase')
        expectedRes = 'CamelCase'
        chai.assert.equal(res, expectedRes, "camelCase to CamelCase")

        res = upperFirst('0abc')
        expectedRes = '0abc'
        chai.assert.equal(res, expectedRes, "0abc to 0abc")

        res = upperFirst('-2')
        expectedRes = '-2'
        chai.assert.equal(res, expectedRes, "-2 to -2")

        res = upperFirst(' fred')
        expectedRes = ' fred'
        chai.assert.equal(res, expectedRes, "First character being whitespace, ' fred' to ' fred'")
    })    
});