'use strict';

// holds each frame information: rolls, bonus amounts and totals
function Frame(frameNumber) {
  this.information = new Map();
  this._setup(frameNumber);
};

Frame.prototype.add = function (key, value) {
  if(this._isRoll2(key) && this._isTooHigh(value)) {
    throw new Error('Second roll too high');
  };
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

Frame.prototype._setup = function (frameNumber) {
  this.add('frame_number', frameNumber);
  this.add('roll1', 0);
  this.add('roll2', 0);
  this.add('bonus1', 0);
  this.add('bonus2', 0);
};

Frame.prototype._getValue = function (key) {
  return this.information.get(key);
};

Frame.prototype._isRoll2 = function (key) {
  return key === 'roll2';
};

Frame.prototype._isTooHigh = function (value) {
  return (this._getValue('roll1') + value) > 10
};
