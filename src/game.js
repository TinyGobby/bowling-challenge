'use strict';

function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._possibleRolls = ['roll1', 'roll2'];
  this._roll = 0;
  this._frameCounter = 0;
};

Game.prototype.addScore = function(score) {
  this._correctFrame().add(this._correctRoll(), score);
  this._updateRoll();
  if(this._roll === 0) { this._updateFrame() };
};

Game.prototype.total = function () {
  let total = 0;
  let framesLength = this.frames.length;

  for (let i = 0; i < framesLength; i++) {
    total += this.frames[i].total();
  };
  return total;
};

Game.prototype._addEmptyFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  };
};

Game.prototype._correctRoll = function () {
  return this._possibleRolls[this._roll];
};

Game.prototype._updateRoll = function () {
  this._roll = this._roll === 0 ? 1 : 0;
};

Game.prototype._correctFrame = function () {
  return this.frames[this._frameCounter];
};

Game.prototype._updateFrame = function () {
  this._frameCounter++;
};
