(function (exports) {
    'use strict';

    const voted = {};
    function checkVoter(name) {
        if (voted[name]) {
            return true;
        } else {
            voted[name] = true;
            return false;
        }
    }

    exports.checkVoter = checkVoter;
}(
    exports === undefined
        ? window
        : exports
));
