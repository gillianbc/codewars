console.log('This is the scrap file')

/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fibonacci, and factorial.

sum accepts two integers a and b and returns a + b.
fibonacci accepts a single integer n and returns 1 if n <= 1 or fibonacci(n - 1) + fibonacci(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fibonacci"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fibonacci(5) = 8 // "call"
// "getCallCount" - total call count: 1


Constraints:

0 <= a, b <= 105
1 <= n <= 10
0 <= actions.length <= 105
actions.length === values.length
actions[i] is one of "call" and "getCallCount"
fnName is one of "sum", "factorial" and "fibonacci"
 */

const memoize = (fn) => {
    console.log(fn.toString());

    let cache = {};

    const isCached = (func, argVals) => {
        // Does the cache contain a request for this function with these args?
        console.log('Checking the cache ' + func + ' ' + argVals)
        // TODO
        return false;
    }

    function addNewCacheFunction(functionName, functionArgs, result) {
        // add a new entry to the cache for this function
        let argsArray = [functionArgs]
        let resultsArray = [ result ]
        let cacheEntry = {};
        let cacheValue = { args: argsArray, results: resultsArray}
        cacheEntry[functionName] = cacheValue;
        Object.assign(cache, cacheEntry);
    }

    function appendToExistingCacheFunction(existingCacheEntryForFunc, functionArgs, result) {
        existingCacheEntryForFunc.args.push(functionArgs);
        existingCacheEntryForFunc.results.push(result)
    }

    const addToCache = (func, argVals) => {
        // adds the function, args and result to the cache
        console.log('Adding to the cache ' + func + ' ' + argVals)
        let functionName = func.name;
        let result = func(...argVals)

        // get the existing cache row for this function
        let existingCacheEntryForFunc = cache[functionName];
        let functionArgs = Array.from(argVals);

        if (existingCacheEntryForFunc != undefined) {
            appendToExistingCacheFunction(existingCacheEntryForFunc, functionArgs, result);
        } else {

            addNewCacheFunction(functionName, functionArgs, result);
        }

        console.log('Cache after add ' + JSON.stringify(cache))

    }

    const getCachedValue = (func, argVals) => {
        console.log('Getting from the cache ' + func + ' ' + argVals)
        let row = cache[func];
        // TODO - how do I find the entry for this set of args?  forEach?
        return undefined;
    }

    return function (...args) {
        if (!isCached(fn, args)) {
            console.log('Not from the cache')
            addToCache(fn, args)
            return fn(...args)
        } else {
            console.log('From the cache')
            return getCachedValue(fn, ...args);
        }
    }
}


const sum = (a, b, c) => a + b + c;
const memoizedSum = memoize(sum);
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const fibonacci = (n) => (n <= 1) ? 1 : (fibonacci(n - 1) + fibonacci(n - 2));


console.log(memoizedSum(1, 2, 3))
console.log(memoizedSum(12, 2, 3))