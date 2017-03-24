(function (exports) {
    'use strict';

    function count(list) {
        if (list.length === 0) {
            return 0;
        }
        return 1 + count(list.slice(1));
    }

    exports.count = count;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
