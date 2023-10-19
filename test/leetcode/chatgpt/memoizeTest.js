
const assert = require('chai').assert;
const memoize = require('../../../src/leetcode/chatgpt/memoize').memoize;

describe('Memoize', function(){
    // Not sure how to test that values have been read from the cache
    const sum = (a, b, c) => a + b + c;
    const memoizedSum = memoize(sum);
    const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
    const memoizedFactorial = memoize(factorial)
    const fibonacci = (n) => (n <= 1) ? 1 : (fibonacci(n - 1) + fibonacci(n - 2));
    const memoizedFibonacci = memoize(fibonacci);

    it('Called several times for different functions',() => {
        assert.equal(memoizedSum(1, 2, 3), 6);
        assert.equal(memoizedSum(1, 2, 3), 6);
        assert.equal(memoizedSum(3, 2, 3), 8);
        assert.equal(memoizedFibonacci(3), 3);
        assert.equal(memoizedFibonacci(3), 3);
        assert.equal(memoizedSum(3, 2, 3), 8);
    });


})