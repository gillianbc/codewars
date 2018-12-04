_ = require('lodash');


//func that always returns true
const alwaysTrue = () => true;
const legitString = (anything) => _.isString(anything) && anything.length > 0;
module.exports = {
    alwaysTrue,
    legitString
}

