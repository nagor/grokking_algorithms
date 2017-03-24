describe('Breadth-first search in graph', () => {
    const { search } = require('./01_breadth-first_search');
    const should = require('should');

    function predicate(name) {
        // person is mango seller
        return name[name.length - 1] === 'm';
    }

    const graph = {};
    graph['you'] = ['alice', 'bob', 'claire'];
    graph['bob'] = ['anuj', 'peggy'];
    graph['alice'] = ['peggy'];
    graph['claire'] = ['thom', 'jonny'];
    graph['anuj'] = [];
    graph['peggy'] = [];
    graph['thom'] = [];
    graph['jonny'] = [];

    it('Can search in graph using predicate function', () => {
        search(graph, 'you', predicate)
            .should.be.exactly('thom'); // thom is a mango seller!
    });

    it('Returns null if there is no start vertex in the graph', () => {
        should(search(graph, 'pamm', predicate))
            .be.exactly(null);
    });

    it('Returns null if unable to find anything', () => {
        should(search(graph, 'pamm', () => false))
            .be.exactly(null);
    });
});
