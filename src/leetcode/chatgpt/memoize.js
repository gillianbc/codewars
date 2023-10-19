const memoize = (fn) => {
    const cache = new Map();

    return function (...args) {
        const key = args.join('-'); // Generate a unique key based on arguments
        if (cache.has(key)) {
            console.log('Getting value from the cache');
            return cache.get(key);
        }

        console.log('Not from the cache');
        const result = fn(...args);
        cache.set(key, result); // Cache the result with the unique key
        return result;
    };
};

module.exports = {
    memoize
}



