const log = console.log;
const _ = require('lodash');
const validator = require('./predicates').validator;
const checker = require('./predicates').checker;

const isString = (obj) => _.isString(obj);
const nonEmptyString = (obj) => isString(obj) && obj.length > 0;

const stringValidator = validator("Not a string data type", isString);
const nonEmptyStringValidator = validator("An empty string is not allowed", nonEmptyString);

const checkString = checker(stringValidator, nonEmptyStringValidator);


module.exports = {
    stringValidator,
    nonEmptyStringValidator,
    checkString
}