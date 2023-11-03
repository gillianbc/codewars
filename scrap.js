/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let result = {}
  this.forEach((row) => {
    let propname = fn(row);
    if (result.hasOwnProperty(propname))
      result[propname].push(row)
    else
      result[propname] = [row];
  })
  console.log(result)
  return result;
};

const array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"3"},
  {"id":"2"},
  {"id":"2"}
]
const fn = function (item) {
    return item.id;
  }

array.groupBy(fn);

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */