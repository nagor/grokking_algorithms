describe('Greedy algorithms can find result in NP-complete problem', () => {
    const { setCovering } = require('./01_set_covering');
    require('should');

    // You pass an array in, and it gets converted to a set.
    const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

    const stations = {};
    stations['kone'] = new Set(['id', 'nv', 'ut']);
    stations['ktwo'] = new Set(['wa', 'id', 'mt']);
    stations['kthree'] = new Set(['or', 'nv', 'ca']);
    stations['kfour'] = new Set(['nv', 'ut']);
    stations['kfive'] = new Set(['ca', 'az']);

    it('Can list of stations with desired coverage', () => {
        setCovering(statesNeeded, stations)
            .should.be.deepEqual(new Set(['kone', 'ktwo', 'kthree', 'kfive']));
    });
});
