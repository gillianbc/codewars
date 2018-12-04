const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const add = require('../app').add;

describe('My little application', function(){
    describe('General test',() => {
        it('1 plus 1 should equal 2',() => {
            (1 + 1).should.equal(2);
        });
    });
    describe('sayHello', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHello(), 'hello');
        });
        it('sayHello should return a string', function(){
            let result = sayHello();
            assert.typeOf(result, 'string');
        });
    });
    describe('add', function(){
        it('add should add two numbers', function(){
            let result = add(12,3)
            assert.equal(result, 15);
        });
        it('add should return a number', function(){
            let result = add(12,3)
            assert.typeOf(result, 'number');
        })
    });
})