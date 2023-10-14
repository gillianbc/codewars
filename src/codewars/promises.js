const resolvedPromise = () => {
    return Promise.resolve('hello');
};
const rejectedPromise = () => {
    return Promise.reject('bye-bye');
};
const allResolved = () => {
    return Promise.all([
        Promise.resolve('a'),
        Promise.resolve(1),
        Promise.resolve(2 + 3)
    ])
}

module.exports = {
    resolvedPromise,
    rejectedPromise,
    allResolved
}