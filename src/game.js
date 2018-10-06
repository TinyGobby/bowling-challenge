'use strict';

function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._possibleKeys = ['roll1', 'roll2'];
  this._key = 0;
  this._frameCounter = 0;
};

Game.prototype.addScore = function(value) {
  this._correctFrame().add(this._toCorrectKey(), value);
  this._updateKey();
  if(this._key === 0) { this._updateFrame() };
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

Game.prototype._toCorrectKey = function () {
  return this._possibleKeys[this._key];
};

Game.prototype._updateKey = function () {
  this._key = this._key === 0 ? 1 : 0;
};

Game.prototype._correctFrame = function () {
  return this.frames[this._frameCounter];
};

Game.prototype._updateFrame = function () {
  this._frameCounter++;
};
