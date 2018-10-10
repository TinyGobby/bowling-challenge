// holds frame information
function Frame(frameNumber) {
  this.information = new Map();
  this._setup(frameNumber);
}

Frame.prototype.add = function (roll, score) {
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

Frame.prototype._isTooHigh = function (score) {
  return this._getScore('roll1') + score > 10;
};
