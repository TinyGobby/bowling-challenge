

// holds frame information and provides error correction
function Frame(frameNumber) {
  this.information = new Map();
  this._setup(frameNumber);
}

Frame.prototype.add = function (roll, score) {
  // if(0 > score || score > 10 || isNaN(score)) {
  //   throw new Error('Incorrect input, please give a number between 0 and 10');
  // };
  // if(this._isRoll2(roll) && ((this._getScore('roll1') + score) > 10) {
  //   throw new Error('Second roll too high');
  // };
  this.information.set(roll, score);
};

Frame.prototype.update = function (key, value) {
  this.information.set(key, this.information.get(key) + value);
};

Frame.prototype.calculateFrameTotal = function () {
  let total = 0;
  total += this._getScore('roll1');
  total += this._getScore('roll2');
  total += this._getScore('bonus');
  return total;
};

Frame.prototype._setup = function (frameNumber) {
  this.add('frame_number', frameNumber);
  this.add('roll1', 0);
  this.add('roll2', 0);
  this.add('bonus', 0);
  this.add('bonusCounter', 0);
};

Frame.prototype._getScore = function (score) {
  return this.information.get(score);
};

Frame.prototype._isRoll2 = function (roll) {
  return roll === 'roll2';
};

Frame.prototype._isTooHigh = function (score) {
  return this._getScore('roll1') + score > 10;
};
