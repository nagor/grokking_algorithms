(function (exports) {
    function fact(x) {
        if (x === 1) {
            return 1;
        } else {
            return x * fact(x - 1);
        }
    }

    exports.factorial = fact;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
