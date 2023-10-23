/**
 * 2725. Interval Cancellation
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
 *
 * The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.
 * @param fn
 * @param args
 * @param t
 * @returns {cancelFn}
 */



const cancellable = function(fn, args, t) {

  fn(...args);
  const repeatingJobId = setInterval(()=>{
    fn(...args)
  }, t);

  // Provide a cancel function in case we want to stop the scheduledJob and abort
  const cancelFn = function (){
    console.log('Cancelling scheduled job (if not already run)')
    clearInterval(repeatingJobId);
  };
  return cancelFn ;
};

// ========================================
const results = []

// We'll test with an arbitrary function that we will make cancellable
const multiplyByFive = (x) => {
  console.log('Multiplying by 5')
  return x * 5
}

// Test data
const args = [2], t = 2, cancelT = 40

// Runs the test function and stores the results
const executeAndStoreResults = (...argsArr) => {
  console.log('Executing and storing results')
  const result = multiplyByFive(...argsArr);
  results.push(result)
}

// Go! Run our function for the given args after t milliseconds.  It will return us a function
// we can use to cancel it, if we wish
const cancelRepeatingJob = cancellable(executeAndStoreResults, args, t);

//  After cancelT milliseconds, run the cancelScheduledJob and log out any stored results
setTimeout(() => {
  cancelRepeatingJob()
  console.log(results) // [{"time":20,"returned":10}]
}, cancelT)
