describe('Dijkstra\'s algorithm can find fastest (cheapest, shortest) path in directed acyclic graph with positive weights', () => {
    const { dijkstrasFastestPath } = require('./01_dijkstras_algorithm');
    require('should');

    // the graph
    const graph = {};
    graph['start'] = {};
    graph['start']['a'] = 6;
    graph['start']['b'] = 2;

    graph['a'] = {};
    graph['a']['fin'] = 1;

    graph['b'] = {};
    graph['b']['a'] = 3;
    graph['b']['fin'] = 5;

    graph['fin'] = {};

    // The costs table
    const costs = {};
    costs['a'] = 6;
    costs['b'] = 2;
    costs['fin'] = Infinity;

    // the parents table
    const parents = {};
    parents['a'] = 'start';
    parents['b'] = 'start';
    parents['fin'] = null;

    it('Can calculate cost from the start to each node', () => {
        dijkstrasFastestPath(graph, costs, parents);
        costs.should.be.deepEqual({ a: 5, b: 2, fin: 6 });
    });
});
