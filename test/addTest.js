import chai from "chai"
import add from "../src/add.js"

describe('add', function() {
    it('Add should return sum of two positive numbers', function(){
        chai.assert.equal(add(2054,9999), 2054 + 9999);
    });
});

describe('add should return sum of two negative numbers', function() {
    it('', function(){
        chai.assert.equal(add(-5,-7), -5+(-7));
    });
});

describe('add should return zero of zum of two zeros', function() {
    it('', function(){
        chai.assert.equal(add(0,0), 0);
    });
});

