'use strict';

function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._possibleRolls = ['roll1', 'roll2']
  this._roll = 0
};

Game.prototype.addScore = function(value) {
  this.frames[0].add(this._possibleRolls[this._roll], value);
  this._roll = (this._roll === 0) ? 1 : 0;
};

Game.prototype.total = function () {
  let total = 0;
  let framesLength = this.frames.length;

  for (let i = 0; i < framesLength; i++) {
    total += this._frameTotal(i);
  };
  return total;
};

Game.prototype._addEmptyFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  };
};

Game.prototype._frameTotal = function (frame) {
  return this.frames[frame].total();
};