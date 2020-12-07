import chai from "chai"
import capitalize from "../../src/capitalize.js"

describe('Testing capitalize-function with strings', function () {
    it("capitalize('FRED') => 'Fred'", function () {
        chai.assert.equal(capitalize('FRED'), 'Fred');
    });
    it("capitalize('tHiS teSt') => This test", function () {
        chai.assert.equal(capitalize('tHiS teSt'), 'This test')
    });
    it('returns empty string for null input', function () {
        chai.assert.equal(capitalize(null), '')
    })
    it('returns empty string for empty string input', function () {
        chai.assert.equal(capitalize(''), '')
    })
});


