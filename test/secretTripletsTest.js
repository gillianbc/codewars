const assert = require('chai').assert;
const secret = require('../secretTriplets');

describe('Basic Tests',() => {
    it('should cope with abc_bcd',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(abc_bcd),'abcd');
    });

    it('should cope with bcd_abc',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(bcd_abc),'abcd');
    });
    it('should cope with abc_bcd_def',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(abc_bcd_def),'abcdef');
    });
    it('should cope with abc_def_bcd',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(abc_def_bcd),'abcdef');
    });
    it('should cope with def_bcd_abc',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(secret.recoverSecret(def_bcd_abc),'abcdef');
    });
    
    const abc_bcd = [
    ['a','b','c'],
    ['b','c','d']
    ];
    const bcd_abc = [
        ['b','c','d'],
        ['a','b','c']
        
        ];
    const abc_def_bcd = [
        ['a','b','c'],
        ['d','e','f'],
        ['b','c','d']
        ];
    const abc_bcd_def = [
        ['a','b','c'],
        ['b','c','d'],
        ['d','e','f']
        ];
    const def_bcd_abc = [
        ['d','e','f'],
        ['b','c','d'],
        ['a','b','c']
        ];
    const triplets1 = [
        ['t','u','p'],
        ['w','h','i'],
        ['t','s','u'],
        ['a','t','s'],
        ['h','a','p'],
        ['t','i','s'],
        ['w','h','s']
      ]
    
});