(function (exports) {
    'use strict';

    function max(list) {
        // Fixed case if array.length < 2
        if (list.length < 2) {
            return list[0]; // =>: single item or undefined
        }

        if (list.length === 2) {
            return list[0] > list[1] ? list[0] : list[1];
        }
        let subMax = max(list.slice(1));
        return list[0] > subMax ? list[0] : subMax;
    }

    exports.max = max;
}(
    exports === undefined
        ? window
        : exports
));
