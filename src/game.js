function Game() {
  this.frames = [];
  this._addEmptyFrames();
  this._roll = 'roll1';
  this._frameCounter = 0;
  this._tenthFrameCounter = 0;
}
// Extract bonuses into separate object
// Break up Game.addScore() into multiple separate functions or objects
// Extract 10th frame into separate object (with inheritance?)
Game.prototype.check = function (frame, information) {
  return this.frames[frame].information.get(information);
};

Game.prototype.addScore = function (score) {
  if (this._isIncorrect(score)) {
    throw new Error('Incorrect input, please give a number between 0 and 10');
  }

  if (this._frameCounter > 0) {
    this._updatePreviousBonus(score);
  }

  if (this._frameCounter == 9) {
    this._tenthFrame(score);
    return;
  }

  // Remove if UI can stop too high a score being added
  // then refactor the 10th frame object
  // (remove this._currentFrame().add(this._roll, score);)
  if (this._isTooHigh(score)) {
    throw new Error('Second roll too high');
  }

  this._currentFrame().add(this._roll, score);

  // Split into separate bonus object
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

Game.prototype._tenthFrame = function (score) {
  this._currentFrame().add(this._roll, score);

  if (this._isStrike(score)) {
    this._currentFrame().add('bonusCounter', 2);
  } else if (this._isSpare()) {
    this._currentFrame().add('bonusCounter', 1);
  }

  if (this._roll === 'roll2') {
    this._roll = 'bonus';
  } else {
    this._updateRoll();
  }
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

Game.prototype._frameMinus = function (i) {
  return this.frames[this._frameCounter - i];
};

Game.prototype._isValidFrame = function (i) {
  return this._frameCounter - i > -1;
};

Game.prototype._isIncorrect = function (score) {
  return score < 0 || score > 10 || isNaN(score);
};

Game.prototype._isTooHigh = function (score) {
  return this._roll === 'roll2' && this.check(this._frameCounter, 'roll1') + score > 10;
};

Game.prototype._updatePreviousBonus = function (score) {
  for (let i = 1; i < 3; i++) {
    if (this._isValidFrame(i) && this._frameMinus(i).information.get('bonusCounter') > 0) {
      this._frameMinus(i).update('bonus', score);
      this._frameMinus(i).update('bonusCounter', -1);
    }
  }
};
