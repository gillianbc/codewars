const chai = require('chai');
const assert = chai.assert;
const { addTwoPromises, addTwoPromisesAll, addTwoPromisesAsync } = require('../../src/leetcode/addTwoPromises');


// chatgpt showed me this, I'd forgotten how to assert on the promise
describe('promise tests', () => {
  describe('addTwoPromises', () => {
    it('should correctly add the resolved values of two promises', () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.resolve(5);

      addTwoPromises(promise1, promise2).then(result => {
        assert.equal(result, 8); // 3 + 5 = 8
      });
    });

    it('should handle rejected promises and throw an error', () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.reject('Error: Promise rejected');

      addTwoPromises(promise1, promise2).catch(error => {
        assert.include(error, 'Error: Promise rejected');
      });
    });
  });
  describe('addTwoPromisesAll', () => {
    it('should correctly add the resolved values of two promises', async () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.resolve(5);

      const result = await addTwoPromisesAll(promise1, promise2);
      assert.equal(result, 8); // 3 + 5 = 8
    });

    it('should handle rejected promises and throw an error', async () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.reject('Error: Promise rejected');

      try {
        await addTwoPromisesAll(promise1, promise2);
      } catch (error) {
        assert.include(error, 'Error: Promise rejected');
      }
    });
  });

  describe('addTwoPromisesAsync', () => {
    it('should correctly add the resolved values of two promises', async () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.resolve(5);

      const result = await addTwoPromisesAsync(promise1, promise2);
      assert.equal(result, 8); // 3 + 5 = 8
    });

    it('should handle rejected promises and throw an error', async () => {
      const promise1 = Promise.resolve(3);
      const promise2 = Promise.reject('Error: Promise rejected');

      try {
        await addTwoPromisesAsync(promise1, promise2);
      } catch (error) {
        assert.include(error, 'Error: Promise rejected');
      }
    });
  });
});




