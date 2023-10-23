/**
 * 2715 Timeout Cancellation
 *  The important thing to understand, is that due to the magic of closures, the cancelFn returned by cancellable
 *  retains access to the scheduled job after the end of the cancellable function
 *
 *  Being able to pause before executing a function and provide a way of cancelling it before it actually gets invoked,
 *  is a useful feature.  For example, if I pause Channel 4, then it will switch TV to standby after 5 minutes, unless I
 *  click a button to cancel the standby
 *
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  // Schedule the function to run in t milliseconds
  const scheduledJob = setTimeout(()=>{
    fn(...args)
  }, t);
  // Provide a cancel function in case we want to stop the scheduledJob and abort
  const cancelFn = function (){
    console.log('Cancelling scheduled job (if not already run)')
    clearTimeout(scheduledJob);
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
const args = [2], t = 20, cancelT = 50

// Runs the test function and stores the results
const executeAndStoreResults = (...argsArr) => {
  console.log('Executing and storing results')
  const result = multiplyByFive(...argsArr);
  results.push(result)
}

// Go! Run our function for the given args after t milliseconds.  It will return us a function
// we can use to cancel it, if we wish
const cancelScheduledJob = cancellable(executeAndStoreResults, args, t);

//  After cancelT milliseconds, run the cancelScheduledJob and log out any stored results
setTimeout(() => {
  cancelScheduledJob()
  console.log(results) // [{"time":20,"returned":10}]
}, cancelT)
