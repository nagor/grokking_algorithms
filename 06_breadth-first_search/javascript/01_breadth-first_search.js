(function (exports) {
    'use strict';

    function search(graph, startVertex, matched) {
        let searchQueue = [];
        const startChildren = graph[startVertex];
        if (typeof startChildren === 'undefined') {
            return null;
        }
        searchQueue = searchQueue.concat(startChildren);
        // This array is how you keep track of which people you've searched before.
        const searched = [];
        while (searchQueue.length) {
            const vertex = searchQueue.shift();
            // Only search this person if you haven't already searched them
            if (searched.indexOf(vertex) === -1) {
                if (matched(vertex)) {
                    return vertex;
                } else {
                    searchQueue = searchQueue.concat(graph[vertex]);
                    // Marks this person as searched
                    searched.push(vertex);
                }
            }
        }
        return null;
    }

    exports.search = search;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
