const _ = require('lodash');

const validator = (errorCode, method) => {
    const valid = (...args) => method.apply(method,args);
    valid.errorCode = errorCode;
    return valid;
};
// Applies all the validators and returns an array of errorCodes (which is just a string explainng what's wrong)
const checker = (...validators) => {
    return(something) => {
        return _.reduce(validators, (errors, validatorFunction) => {
            if(validatorFunction(something)) {
                return errors;
            }
            else {
                return _.chain(errors).push(validatorFunction.errorCode).value();
            }
        }, [])
    }
}
module.exports = {
    validator,
    checker
}