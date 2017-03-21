(function (exports) {
    'use strict';

    function sum(arr) {
        let total = 0;
        for (let x = 0; x < arr.length; x++) {
            total += arr[x];
        }
        return total;
    }

    exports.sum = sum;
}(
    exports === undefined
        ? window
        : exports
));
