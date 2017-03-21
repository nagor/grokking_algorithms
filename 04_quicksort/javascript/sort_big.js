describe('recursion', () => {
    const { quickSort } = require('./05_quicksort');
    require('should');

    // Quick sort Algo implementation is not so quick.
    const number = 100000;
    const toBeSorted = [];
    for (let i = 0; i < number; i++) {
        toBeSorted.push(Math.random() * number);
    }

    it('Quick sort for N', () => {
        const sorted = quickSort(toBeSorted);
        (sorted[0] <= sorted[1]).should.be.exactly(true);
        (sorted[1] <= sorted[2]).should.be.exactly(true);
        (sorted[2] <= sorted[3]).should.be.exactly(true);

        (sorted[sorted.length - 4] <= sorted[sorted.length - 3]).should.be.exactly(true);
        (sorted[sorted.length - 3] <= sorted[sorted.length - 2]).should.be.exactly(true);
        (sorted[sorted.length - 2] <= sorted[sorted.length - 1]).should.be.exactly(true);
    });
});
