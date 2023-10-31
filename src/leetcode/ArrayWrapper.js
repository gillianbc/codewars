/**
 * Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
 *
 * When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
 * When the String() function is called on the instance, it will return a comma separated string surrounded by brackets.
 * For example, [1,2,3].
 *
 *
 * Example 1:
 *
 * Input: nums = [[1,2],[3,4]], operation = "Add"
 * Output: 10
 * Explanation:
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * Example 2:
 *
 * Input: nums = [[23,98,42,70]], operation = "String"
 * Output: "[23,98,42,70]"
 * Explanation:
 * const obj = new ArrayWrapper([23,98,42,70]);
 * String(obj); // "[23,98,42,70]"
 * Example 3:
 *
 * Input: nums = [[],[]], operation = "Add"
 * Output: 0
 * Explanation:
 * const obj1 = new ArrayWrapper([]);
 * const obj2 = new ArrayWrapper([]);
 * obj1 + obj2; // 0
 *
 * You need to understand a few things:
 *
 * When we perform operations like obj1 + obj2 or String(obj1), we are using an object where a primitive is expected instead,
 * so the JS engine will try to perform a type conversion to fulfill the operation (aka try to convert the type from
 * object to a primitive type)
 * If the primitive that's expected is an integer, then JS engine looks for valueOf() (which is a method on Object.prototype)
 * If the primitive that's expected is a string, then JS engine looks for toString() (which is a method on Object.prototype)
 */



// Define a custom object constructor
function ArrayWrapper(arr) {
  this.arr = arr;
}

ArrayWrapper.prototype.toString = function() {
  let result = this.arr.reduce(function(acc, current) {
    return acc + current + ',';
  }, '');
  return '[' + result.slice(0, -1) + ']';
};

ArrayWrapper.prototype.valueOf = function() {
  return this.arr.reduce(function(acc, current) {
    return acc + current;
  }, 0);
};


let aw = new ArrayWrapper([1,2]);
let bw = new ArrayWrapper([5,9]);
let result = aw + bw;
let bigArray = new ArrayWrapper([[23,98,42,70]])
console.log(result)
console.log(bigArray.toString())