
const assert = require('chai').assert;
const argumentsLength = require('../../src/leetcode/argsLength').argumentsLength;

describe('Args length function', function(){
    describe('3 simple args',() => {
        it('3 numbers',() => {
            assert.equal(argumentsLength(1,2,3), 3);
        });
        it('3 strings',() => {
            assert.equal(argumentsLength('a','banana','c'), 3);
        });
    });
    describe('More complex args',() => {
        it('No args',() => {
            assert.equal(argumentsLength(), 0);
        });
        it('3 different',() => {
            assert.equal(argumentsLength({},null,"3"), 3);
        });

    });

})