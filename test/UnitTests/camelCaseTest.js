import chai from "chai"
import camelCase from "../../src/camelCase.js"

describe('camelCase', function () {
    it('Every return value should be of type String', function () {
        chai.assert.typeOf(camelCase('hello world and all of itse inhabitants!'), 'string');
    });
    it("camelCase('Foo Bar') => 'fooBar'", function () {
        chai.assert.equal(camelCase('Foo Bar'), 'fooBar')
    })
    it("camelCase('--foo-bar--'", function () {
        chai.assert.equal(camelCase('foo-bar--'), 'fooBar')
    })
    it("camelCase('__FOO_BAR__') => 'fooBar' => 'fooBar'", function () {
        chai.assert.equal(camelCase('__FOO_BAR__'), 'fooBar')
    })
});