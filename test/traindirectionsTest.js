const assert = require('chai').assert;
const directions = require('../traindirections');

describe('Basic Tests',() => {
    it('should cope with a single value',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(directions.dirReduc(["NORTH"]), [ "NORTH" ]);
    });
    it('should cope with two the same',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(directions.dirReduc(["NORTH", "NORTH"]), [ "NORTH", "NORTH" ]);
    });
    it('should cope with a single cancellation',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(directions.dirReduc(["NORTH", "SOUTH"]), []);
    });
    
    it('should cope with NEWS',() => {
        //deepEqual is used for arrays to test the contents
        assert.deepEqual(directions.dirReduc(["NORTH", "EAST", "WEST","SOUTH"]), []);
    });
    
    
});
