(function (exports) {
'use strict';

function binary_search(list) {
  return function (item) {
    function search(list, item, low = 0, high = 0) {
      const boundary = low >= high;
      const mid = Math.floor((low + high) / 2);
      const guess = list[mid];
      const match = guess === item;
      return match || boundary
        ? match
          ? mid
          : null
        : guess > item
          ? search(list, item, low, mid - 1)
          : search(list, item, mid + 1, high);
    }
    return search(list, item, 0, list.length - 1);
  };
}

exports.search = binary_search;
}(
  (typeof exports === 'undefined')
      ? window
      : exports
));
