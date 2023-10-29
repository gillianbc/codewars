/**
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size.
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 *
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 */



var chunk = function(arr, size) {
  if (size <= 0)
    return undefined;

  let len = arr.length;
  if (len == 0)
    return [];

  if (size >= len)
    size = len;


  // Find how many chunks

  let numOfChunks = Math.ceil(len/size);

  console.log('numOfChunks:' + numOfChunks)
  let result = []
  let startPoint = 0;

  for (let i = 0; i < numOfChunks; i++) {
    console.log('i: ' + i)
    addToResult((arr.slice(startPoint, startPoint + size)));
    startPoint+=size;

  }

  console.log(result)

  function addToResult(item) {
    if (item.length > 0)
      console.log('odd one out')
    result.push(item)
  }

  if (result.length < numOfChunks){
    let lastOne = arr.slice((numOfChunks - 1 ) * size, len);
    addToResult(lastOne);
  }
  return result;
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'fish', 'goldfish'];
const nums = [8,42,7,83,7,8324,37,7523,47,43,6,6]
const size = 4;
console.log('----')
console.log(chunk(animals, size));

/**
 * A better solution than mine is below
 *
 */
var chunk2 = function (arr, size) {
  let result = []
  for(i=0; i<arr.length; i+=size) {
    result.push(arr.slice(i, i+size))
  }
  return result
};