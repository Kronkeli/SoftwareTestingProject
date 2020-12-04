import chai from "chai"
import every from "../../src/every.js"

describe('every Tests', function () {
    it("every([true, 1, null, 'yes']) => false ?", function () {
        chai.assert.isFalse(every([true, 1, null, 'yes'], Boolean))
    })
    it("every([1, 'yes', true] => true ?)", function () {
        chai.assert.isTrue(every([1, 'yes', true, true], Boolean))
    })
    it("every([], Boolean)", function () {
        chai.assert.isTrue(every([]))
    })
    it("predicament 'values > 5': [6, 10, 11, 34] => true ?", function () {
        chai.assert.isTrue(every([6, 10, 11, 34], function (value) { return value > 5 }))
    })
    it("predicament 'values < 20': [6, 10, 11, 34]' => false ?", function () {
        chai.assert.isFalse(every([6, 10, 11, 34], function (value) { return value < 20 }))
    })
})