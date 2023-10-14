const assert = require('chai').assert;
const secret = require('../../src/codewars/secretTriplets2');

describe('Basic Tests',() => {
    it('should cope with whatisup',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(whatisup),'whatisup');
    });

    
    
    whatisup = [
        ['t','u','p'],
        ['w','h','i'],
        ['t','s','u'],
        ['a','t','s'],
        ['h','a','p'],
        ['t','i','s'],
        ['w','h','s']
      ]
    
});