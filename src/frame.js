'use strict';

function Frame() {
  this.information = new Map();
  this._setup();
};

Frame.prototype.add = function (key, value) {
  this.information.set(key, value);
};

Frame.prototype.total = function () {
  let total = 0;
  total += this._getValue('roll1');
  total += this._getValue('roll2');
  total += this._getValue('bonus1');
  total += this._getValue('bonus2');
  return total;
};

Frame.prototype._setup = function () {
  this.add('frame_number', 0);
  this.add('roll1', 0);
  this.add('roll2', 0);
  this.add('bonus1', 0);
  this.add('bonus2', 0);
};

Frame.prototype._getValue = function (key) {
  return this.information.get(key);
};