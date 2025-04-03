function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFn() {}
    return namedFn
}

function returnsAnAnonymousFunction() {
    return function() {};
}