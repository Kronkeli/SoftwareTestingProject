import chai from "chai"
import add from "../../src/add.js"

describe('add Tests', function () {
    it('Add should return sum of two positive numbers', function () {
        chai.assert.equal(add(2054, 9999), 2054 + 9999);
    });
    it('add returns sum of two negative numbers', function () {
        chai.assert.equal(add(-5, -7), -5 + (-7));
    });
    it('add works with zeros', function () {
        chai.assert.equal(add(0, 0), 0);
    });
    it('add works with numbers in string form', function () {
        chai.assert.equal(add('1', '4'), 5)
    })
});
