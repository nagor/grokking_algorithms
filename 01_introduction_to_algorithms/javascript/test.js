describe('Binary search tests', () => {
    const { search } = require('./01_binary_search');
    const should = require('should');

    it('should return position of the item in the array', () => {
        search([1, 2, 5, 7, 9], 5)
            .should.be.a.Number()
            .and.be.exactly(2);
    });

    it('should return null if item not found', () => {
        should(search([1, 2, 5, 7, 9], 13)).be.a.Null();
    });

    it('should work with boundary values', () => {
        should(search([1, 2, 5, 7, 9], 1)).be.exactly(0);
        should(search([1, 2, 5, 7, 9], 9)).be.exactly(4);
    });

    it('should return null if array is empty', () => {
        should(search([], 1)).be.a.Null();
    });
});

describe('Binary search functional verion tests', () => {
    const { search } = require('./01_binary_search_func');
    const should = require('should');
    const searchFor = search([1, 2, 5, 7, 9]);

    it('should return position of the item in the array', () => {
        searchFor(5)
            .should.be.a.Number()
            .and.be.exactly(2);
    });

    it('should return null if item not found', () => {
        should(searchFor(13)).be.a.Null();
    });

    it('should work with boundary values', () => {
        should(searchFor(1)).be.exactly(0);
        should(searchFor(9)).be.exactly(4);
    });

    it('should return null if array is empty', () => {
        should(search([])(1)).be.a.Null();
    });
});