var addTwoPromises = function (promise1, promise2) {
  return promise1.then(value1 => {
    return promise2.then(value2 => {
      const sum = value1 + value2;
      return sum;
    });
  });
};

const prom1 =
  new Promise(resolve => setTimeout(() => resolve(2), 1))
const prom2 =
  new Promise(resolve => setTimeout(() => resolve(3), 2))

  addTwoPromises(prom1, prom2)
    .then(sum => {
      console.log("Sum:", sum); // Print out the sum
    })