import chai from "chai"
import camelCase from "../../src/camelCase.js"

describe('camelCase', function () {
    it('Every return value should be of type String', function () {
        chai.assert.typeOf(camelCase('hello world and all of itse inhabitants!'), 'string');
    });
});

var person = {
    firstName: "Jaakko",
    lastName: "Kulta"
};



describe('camelCase works without strings', function () {
    it('', function () {
        console.log(camelCase(person));
    });
});

// describe('camelCase', function(){
//     it('', function() {

//     })
// })