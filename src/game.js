'use strict';

function Game() {
  this.frames = [];
  this._addEmptyFrames();
};

Game.prototype.total = function () {
  let total = 0;
  let arrayLength = this.frames.length;
  for (let i = 0; i < arrayLength; i++) {
    total += this._frameTotal(i);
  };
  return total;
};

Game.prototype.addScore = function () {
  this.frames[0].add('roll1', 5);
};

Game.prototype._addEmptyFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  };
};

Game.prototype._frameTotal = function (frame) {
  return this.frames[frame].total();
};