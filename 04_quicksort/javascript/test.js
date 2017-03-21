describe('Sum tests', () => {
    const lsum = require('./01_loop_sum');
    const rsum = require('./02_recursive_sum');
    require('should');
    it('Loop sum', () => {
        lsum.sum([1, 5, 6, 2])
            .should.be.an.Number()
            .exactly(14);
        lsum.sum([])
            .should.be.an.Number()
            .exactly(0);
    });
    it('Recursive sum', () => {
        rsum.sum([1, 5, 6, 2])
            .should.be.an.Number()
            .exactly(14);
        rsum.sum([])
            .should.be.an.Number()
            .exactly(0);
    });
});

describe('Recursive count tests', () => {
    const { count } = require('./03_recursive_count');
    require('should');
    it('Count', () => {
        count([1, 5, 6, 2])
            .should.be.an.Number()
            .exactly(4);
        count([])
            .should.be.an.Number()
            .exactly(0);
    });
});

describe('Recursive max tests', () => {
    const { max } = require('./04_recursive_max');
    const should = require('should');
    it('Max', () => {
        max([1, 5, 10, 25, 16, 1])
            .should.be.an.Number()
            .exactly(25);
        max([25, 16])
            .should.be.an.Number()
            .exactly(25);
        max([17])
            .should.be.an.Number()
            .exactly(17);
        should(max([])).be.exactly(undefined);
    });
});

describe('recursion', () => {
    const { quickSort } = require('./05_quicksort');
    require('should');
    it('Quick sort', () => {
        quickSort([13, 17, 9, 10, 25, 16, 3])
            .should.containDeep([3, 9, 10, 13, 16, 17, 25]);
        quickSort([]).should.containDeep([]);
    });
});