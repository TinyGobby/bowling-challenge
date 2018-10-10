function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._roll = 'roll1';
  this._frameCounter = 0;
}

// Break up Game.addScore() into multiple separate functions or objects
// Extract bonuses into separate object
// Complete logic for 10th frame

Game.prototype.addScore = function (score) {
  this._currentFrame().add(this._roll, score);

  // Refactor nested if statement in Game.addScore()
  for (let i = 1; i < 3; i++) {
    if (this._isValidFrame(i)) {
      if (this._frameMinus(i).information.get('bonusCounter') > 0) {
        this._frameMinus(i).update('bonus', score);
        this._frameMinus(i).update('bonusCounter', -1);
      }
    }
  }

  if (this._isStrike(score)) {
    this._currentFrame().add('bonusCounter', 2);
    this._updateFrame();
    return;
  }
  if (this._isSpare()) {
    this._currentFrame().add('bonusCounter', 1);
  }

  this._updateRoll();
  if (this._roll === 'roll1') this._updateFrame();
};

Game.prototype.calculateTotal = function () {
  let total = 0;
  const framesLength = this.frames.length;

  for (let i = 0; i < framesLength; i++) {
    total += this.frames[i].calculateFrameTotal();
  }
  return total;
};

Game.prototype._addEmptyFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype._updateRoll = function () {
  this._roll = this._roll === 'roll1' ? 'roll2' : 'roll1';
};

Game.prototype._currentFrame = function () {
  return this.frames[this._frameCounter];
};

Game.prototype._updateFrame = function () {
  this._frameCounter++;
};

Game.prototype._isSpare = function () {
  return this._currentFrame().calculateFrameTotal() === 10;
};

Game.prototype._isStrike = function (score) {
  return this._roll === 'roll1' && score == 10;
};

Game.prototype._previousBonusCounter = function () {
  return this._previousFrame().information.get('bonusCounter');
};

Game.prototype._frameMinus = function (i) {
  return this.frames[this._frameCounter - i];
};

Game.prototype._isValidFrame = function (i) {
  return this._frameCounter - i > -1;
};
