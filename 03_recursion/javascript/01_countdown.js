(function (exports) {
    function countdown(i, accumulator = 0) {
        return i > 0
            ? countdown(i - 1, accumulator + 1) // recursive case
            : accumulator;  // base case
    }
    exports.countdown = countdown;
}(
    exports === undefined
        ? window
        : exports
));
