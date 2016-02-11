function identity(x) {
    return x;
}

function constant(x) {
    return () => x;
}

function call(f) {
    return f();
}

function applyWith(args) {
    return function (f) {
        return f.apply(undefined, args);
    };
}

function partial(f, ...args) {
    return f.bind(undefined, ...args);
}

function memo(f) {
    var done, r;

    return function () {
        if (!done) {
            r = f();
            done = true;
        }
        return r;
    };
}

function times(f, n) {
    const result = [];
    var i;
    for (i = 0; i < n; i++) {
        result[i] = f();
    }
    return result;
}

function flatMap(l, f) {
    return Array.prototype.concat.apply([], l.map(f));
}

export default Object.freeze({identity, constant, call, applyWith, partial, memo, times, flatMap});
