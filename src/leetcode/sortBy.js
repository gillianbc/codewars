/**
 * 2724 SortBy
 * Given an array arr and a function fn, return a sorted array sortedArr.
 * You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
 * sortedArray must be sorted in ascending order by fn output.
 *
 * You may assume that fn will never duplicate numbers for a given array.
 *
 *
 *
 * Example 1:
 *
 * Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
 * Output: [1, 2, 3, 4, 5]
 * Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
 *
 * Example 2:
 * Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
 * Output: [{"x": -1}, {"x": 0}, {"x": 1}]
 * Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
 *
 * Example 3:
 * Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
 * Output: [[10, 1], [5, 2], [3, 4]]
 * Explanation: arr is sorted in ascending order by number at index=1.
 *
 * In this problem, you are asked to create a JavaScript function named sortBy,
 * which will sort an array arr according to a function fn provided as input.
 * The function fn always returns a number, and this number is used to determine the sort order of arr.
 * The result should be an array sortedArr, sorted in ascending order according to the output of function fn.
 */



var sortBy = function(arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) < fn(b) ? -1 : 1;
  });
};

const arr = [[3, 4], [5, 2], [10, 1]]
const fn = (x) => x[1];


console.log(sortby(arr, fn));

