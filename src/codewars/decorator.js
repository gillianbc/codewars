// https://www.codewars.com/kata/decorator-pattern/train/javascript

function Decorator(options) {
    if (!options) {
      options = {};
    }
    this.before = options.before;
    this.after = options.after;
  }
  
  Decorator.prototype.decorate = function decorate(fn) {
    var decArgs = Array.prototype.slice.call(arguments, 1), self = this;
    console.log('Decargs '  + decArgs);
    return function() {
      console.log('Args '  + arguments);
      var input = Array.prototype.slice.call(arguments, 0);
      console.log('Before ' + self.before);
      if(typeof self.before == 'function') {
        input = self.before.apply(null, decArgs.concat(input)) || input;
        console.log('Input ' + input);
      }
      input = fn.apply(self, input);
      console.log('Input2 ' + input);
      console.log('After ' + self.after);
      if(typeof self.after == 'function') {
        input = self.after.apply(null, decArgs.concat(input)) || input;
        console.log('Input3 ' + input);
      }
      return input;
    }
  };

  module.exports = {
    Decorator
}