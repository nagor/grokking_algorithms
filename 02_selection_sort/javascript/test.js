describe('Selection search tests', () => {
    const { sort } = require('./01_selection_sort');
    require('should');
    const items = [5, 3, 6, 2, 10];
    it('Can sort items ASC', () => {
        sort(items)
            .should.be.an.Array()
            .deepEqual([2, 3, 5, 6, 10]);
    });
    it('Returns empty on empty', () => {
        sort([])
            .should.be.an.Array()
            .deepEqual([]);
    });
    it('Handles arrays with equal items', () => {
        sort([2, 2, 2])
            .should.be.an.Array()
            .deepEqual([2, 2, 2]);
    });
});
