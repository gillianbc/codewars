/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(3))
 *   .then(console.log); // 5
 */

var addTwoPromises = function (promise1, promise2) {
  return promise1.then(value1 => {
    return promise2.then(value2 => {
      const sum = value1 + value2;
      return sum;
    });
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(3))
  .then(console.log); // 5

// alternatively, using Promise.all
var addTwoPromisesAll = async function (promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then((values) => {
      const sum = values.reduce((total, value) => total + value, 0);
      return sum;
    });
};

addTwoPromisesAll(Promise.resolve(2), Promise.resolve(3))
  .then(console.log); // 5

// alternatively, using async await
var addTwoPromisesAsync = async function (promise1, promise2) {
  try {
    const value1 = await promise1;
    const value2 = await promise2;
    const sum = value1 + value2;
    return sum;
  } catch (error) {
    // Handle errors if any of the promises reject
    console.error(error);
    throw error;
  }
};

addTwoPromisesAsync(Promise.resolve(2), Promise.resolve(3))
  .then(console.log); // 5

module.exports = {
  addTwoPromises,
  addTwoPromisesAll,
  addTwoPromisesAsync
}