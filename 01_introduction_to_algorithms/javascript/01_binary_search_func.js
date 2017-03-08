(function (exports) {
    'use strict';
    const binarySearch = list => item => {
        const search = (list, item) => (low = 0, high = 0) => {
            const boundary = low >= high;
            const mid = Math.floor((low + high) / 2);
            const guess = list[mid];
            const match = guess === item;
            const searchInList = search(list, item);
            return match || boundary
                ? match
                    ? mid
                    : null
                : guess > item
                    ? searchInList(low, mid - 1)
                    : searchInList(mid + 1, high);
        };
        return search(list, item)(0, list.length - 1);
    }

    exports.search = binarySearch;
}(
    (typeof exports === 'undefined')
        ? window
        : exports
    )
);
