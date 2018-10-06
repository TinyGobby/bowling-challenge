'use strict';

// receives frame totals and sums them up, outputting a total to screen
function Total() {};

Total.prototype.sum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};
