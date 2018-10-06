'use strict';

// holds each frame information: rolls, bonus amounts and totals
function Frame(frameNumber) {
  this.information = new Map();
  this._setup(frameNumber);
};

Frame.prototype.add = function (roll, score) {
  if(this._isRoll2(roll) && this._isTooHigh(score)) {
    throw new Error('Second roll too high');
  };
  this.information.set(roll, score);
};

Frame.prototype.total = function () {
  let total = 0;
  total += this._getScore('roll1');
  total += this._getScore('roll2');
  total += this._getScore('bonus1');
  total += this._getScore('bonus2');
  return total;
};

Frame.prototype._setup = function (frameNumber) {
  this.add('frame_number', frameNumber);
  this.add('roll1', 0);
  this.add('roll2', 0);
  this.add('bonus1', 0);
  this.add('bonus2', 0);
};

Frame.prototype._getScore = function (score) {
  return this.information.get(score);
};

Frame.prototype._isRoll2 = function (roll) {
  return roll === 'roll2';
};

Frame.prototype._isTooHigh = function (score) {
  return (this._getScore('roll1') + score) > 10
};
