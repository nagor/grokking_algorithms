(function (exports) {
    'use strict';

    function quickSort(array) {
        if (array.length < 2) {
            // base case, arrays with 0 or 1 element are already "sorted"
            return array;
        } else {
            // recursive case
            let pivot = array[0];
            // sub-array of all the elements less than the pivot
            let less = array.slice(1).filter(function (el) { return el <= pivot; });
            // sub-array of all the elements greater than the pivot
            let greater = array.slice(1).filter(function (el) { return el > pivot; });
            return quickSort(less).concat(pivot, quickSort(greater));
        }
    }

    exports.quickSort = quickSort;
}(
    typeof exports === 'undefined'
        ? window
        : exports
));
