(function () {
    'use strict';

    function findLowestCostNode(costs, processed) {
        let lowestCost = Infinity;
        let lowestCostNode = null;

        // Go through each node
        for (let node in costs) {
            const cost = costs[node];
            // If it's the lowest cost so far and hasn't been processed yet...
            if (cost < lowestCost && (processed.indexOf(node) === -1)) {
                // ... set it as the new lowest-cost node.
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
        return lowestCostNode;
    }

    function dijkstrasFastestPath(graph, costs, parents) {
        let processed = [];
        let node = findLowestCostNode(costs, processed);

        while (node !== null) {
            const cost = costs[node];
            // Go through all the neighbors of this node
            const neighbors = graph[node];
            Object.keys(neighbors).forEach(function (n) {
                let newCost = cost + neighbors[n];
                // If it's cheaper to get to this neighbor by going through this node
                if (costs[n] > newCost) {
                    // ... update the cost for this node
                    costs[n] = newCost;
                    // This node becomes the new parent for this neighbor.
                    parents[n] = node;
                }
            });

            // Mark the node as processed
            processed = processed.concat(node);

            // Find the next node to process, and loop
            node = findLowestCostNode(costs, processed);
        }
    }

    exports.dijkstrasFastestPath = dijkstrasFastestPath;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
