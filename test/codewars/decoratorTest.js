const assert = require('chai').assert;
const {
    Decorator
} = require('../../src/codewars/decorator');

function sum() {
    return Array.prototype.reduce.call(arguments, function(sum, value) {
      return sum + value;
    }, 0);
  }
  
  function filter(min, max) {
    //max and min are the 1st 2 arguments
    console.log(' min ' + min + ' max ' + max);
      console.log(Array.prototype.slice.call(arguments, 2));
      const result = 
    Array.prototype.slice.call(arguments, 2).filter(function(value) {
      return value >= min && value <= max;
    });
    console.log(result);
    return result;
  }
  
  
  function filterNoNumbers() {
    return Array.prototype.filter.call(arguments, function(value) {
      return typeof value === 'number' && value === value && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY;
    });
  }
  
  function round(decimals) {
    if (arguments.length === 2) {
      return arguments[1].toFixed(decimals);
    } else {
      return Array.prototype.splice.call(arguments, 1).map(function(value) {
        return value.toFixed(decimals);
      });
    }
  }
  describe("Kata Tests",function(){
    it("Standard Tests 1", function(){
        assert.equal(sum(1, 4, 8, 9), 22, 'sum(1, 4, 8, 9) should return 22');
        assert.deepEqual(filter(1, 9, -3, 1, 0, 4, 8, 9, 12), [1, 4, 8, 9], 'filter removes values that are not between the minimum and maximum');
        assert.deepEqual(filterNoNumbers(-3, NaN, 1, 0, "2", 4, 8, 9, 12), [-3, 1, 0, 4, 8, 9, 12], 'invalid numbers are filtered');
        assert.deepEqual(round(2, 1, 2.1, 2.346), ["1.00", "2.10", "2.35"], 'round function returns the argument numbers formatted to the specified decimals');
  
//   assert.equal(sum.apply(null, filter(1, 9, -3, 1, 0, 4, 8, 9, 12)), 22, 'sum.apply(null, filter(1, 9, -3, 1, 0, 4, 8, 9, 12)) should return 22');
//   assert.equal(sum.apply(null, filter.apply(null, [1, 9].concat(filterNoNumbers(-3, NaN, 1, 0, "2", 4, 8, 9, 12)))), 22, 'filter.apply(null, [1, 9].concat(filterNoNumbers(-3, NaN, 1, 0, "2", 4, 8, 9, 12)))) should return 22');
//   assert.equal(round.apply(null, [2].concat(sum.apply(null, filter.apply(null, [1, 9].concat(filterNoNumbers(-3, 1.016, 0, 4, NaN, 8.041, '27', 9, 12)))))), "22.06", 'round.apply(null, [2].concat(sum.apply(null, filter.apply(null, [1, 9].concat(filterNoNumbers(-3, 1.016, 0, 4, NaN, 8.041, "27", 9, 12)))))) should return "22.06"');

    });
  });
  