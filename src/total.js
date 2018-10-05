'use strict';

// receives frame totals and sums them up, outputting a total to screen
function Total() {
  this.sum = 0;
};

Total.prototype.add = function(array) {
  this.sum = array.reduce((a, b) => a + b, 0);
};
