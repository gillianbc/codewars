const assert = require('chai').assert;
const once = require('../../src/leetcode/allowOneFunctionCall').once;

describe('Allow function to be called only once', function(){
    const fn = (a,b,c) => (a + b + c)
    const onceFn = once(fn);

    it('call once',() => {
        assert.equal(onceFn(1,2,3), 6);
    });
    it('call twice',() => {
        assert.equal(onceFn(1,2,3), undefined);
    });
    it('call thrice',() => {
        assert.equal(onceFn(1,2,3), undefined);
    });

})