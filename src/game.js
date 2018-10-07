'use strict';

function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._possibleRolls = ['roll1', 'roll2'];
  this._roll = 0;
  this._frameCounter = 0;
};

Game.prototype.addScore = function(score) {
  this._currentFrame().add(this._currentRoll(), score);
  
  if (this._roll === 0 && score == 10) {
    this._currentFrame().add('bonusCounter', 2);
    this._updateFrame();
    return;
  } else if (this._isSpare()) {
    this._currentFrame().add('bonusCounter', 1);
  };
  this._updateRoll();

  if (this._frameCounter > 0) {
    if (this.frames[this._frameCounter-1].information.get('bonusCounter') > 0) {
      this.frames[this._frameCounter - 1].add('bonus', score);
    };
  };

  if (this._roll === 0) { this._updateFrame() };
};

Game.prototype.calculateTotal = function () {
  let total = 0;
  let framesLength = this.frames.length;

  for (let i = 0; i < framesLength; i++) {
    total += this.frames[i].calculateFrameTotal();
  };
  return total;
};

Game.prototype._addEmptyFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  };
};

Game.prototype._currentRoll = function () {
  return this._possibleRolls[this._roll];
};

Game.prototype._updateRoll = function () {
  this._roll = this._roll === 0 ? 1 : 0;
};

Game.prototype._currentFrame = function () {
  return this.frames[this._frameCounter];
};

Game.prototype._updateFrame = function () {
  this._frameCounter++;
};

Game.prototype._isSpare = function () {
  return this._currentFrame().calculateFrameTotal() === 10
};