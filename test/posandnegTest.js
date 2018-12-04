const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('lodash');
const log = console.log;
const {
    alwaysTrue,
    legitString
} = require('../posandneg');


describe('Positive and Negative Tests', () => {
    describe('#alwaysTrue', () => {
        it('should be true', ()=> {
            let result = alwaysTrue();
            result.should.be.true;
        });
        it('should not be false', ()=> {
            let result = alwaysTrue();
            result.should.not.be.false;
        });
    });
    describe('#legitString', () => {
        it('should detect abc as a legitimate string', () => {
            legitString('cow').should.be.true;
        });
        it('undefined should be false', () => {
            legitString(undefined).should.be.false;
        });
        it('empty string should be false', () => {
            legitString('').should.be.false;
        });
        it('number should be false', () => {
            legitString(1).should.be.false;
        });
        it('boolean should be false', () => {
            legitString(true).should.be.false;
        });
    });
});
