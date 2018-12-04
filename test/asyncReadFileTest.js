const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('lodash');
const log = console.log;

const readCow = require('../asyncReadFile').readCow;

describe('Async',() => {
    describe('#readCow',() => {
        //For async functions, we need to use MochaDone
        //Can use any name, but 'done' is the convention
        //This has a built in timeout
        it('should have some content',(done)=>{
            readCow((err, data) => {
                data.should.equal('moo');
                done();
            });
        });
        it('should not have an error',(done) => {
            readCow((err,data) => {
                expect(err).to.not.exist;
                done();
            });
        });
        
    });
});

