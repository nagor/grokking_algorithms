(function (exports) {
    'use strict';

    function setCovering(statesNeeded, stations) {
        const finalStations = new Set();
        while (statesNeeded.size) {
            let bestStation = null;
            let statesCovered = new Set();
            for (let station in stations) {
                const states = stations[station];
                const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
                if (covered.size > statesCovered.size) {
                    bestStation = station;
                    statesCovered = covered;
                }
            }
            statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)));
            finalStations.add(bestStation);
        }
        return finalStations;
    }

    exports.setCovering = setCovering;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
