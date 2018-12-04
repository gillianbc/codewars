const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('lodash');
const log = console.log;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const resolvedPromise = require('../promises').resolvedPromise;
const rejectedPromise = require('../promises').rejectedPromise;
const allResolved = require('../promises').allResolved;

describe('Promises',() => {
    describe('#resolvedPromise',() => {
        it('should be an object',() => {
            const result = resolvedPromise();
            _.isObject(result).should.be.true;
        });
        it('should be resolved and thus go into then',(done) => {
            const result = resolvedPromise();
            result.then((data) => {
                done();
            })
            .catch((err) => {
                //I have to have a catch for promise rejection - rulez is rulez
                //If anything gets passed to the magic mocha done, the test fails
                done(err);
            })
        });
        it('should be resolved - same as last test but more compact syntax',(done) => {
            const result = resolvedPromise();
            result.then((data) => done()).catch(done);
        });
        it('should have data "hello" - verbose mocha syntax',(done) => {
            const result = resolvedPromise();
            result.then((data) =>{
                data.should.equal('hello');
                done();
            }).catch(done);
        });
        it('should eventually have data "hello" - chai assertion',() => {
            const result = resolvedPromise();
            result.should.eventually.equal("hello");
        });
    });
    describe('#rejectedPromise',() => {
        it('should be rejected - verbose mocha syntax',(done) => {
            //Asserting a then is mochas default behaviour so we need to get around that
            const result = rejectedPromise();
            result
            .then((data)=>{
                done(new Error('This should not have resolved'));
            })
            .catch((err) => {
                //We want it to come through here, so we don't do done(err)
                done();
            })
        });
        it('should be rejected - as before, but uses chaiAsPromised assertion',() => {
            const result = rejectedPromise();
            result.should.be.rejected;
        });
    });
    describe('#allResolved',() => {
        it('should all be resolved',() => {
            const result = allResolved();
            result.should.be.fulfilled;
        });
    });
});