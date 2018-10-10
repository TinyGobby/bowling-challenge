function Bonus() {}

Bonus.prototype.updateBonusCounter = function () { };
Bonus.prototype.isSpare = function () { };
Bonus.prototype.isStrike = function () { };

// Game.prototype._updateBonusCounter = function (score) {
//   for (let i = 1; i < 3; i++) {
//     if (this._isValidFrame(i)) {
//       if (this._frameMinus(i).information.get('bonusCounter') > 0) {
//         this._frameMinus(i).update('bonus', score);
//         this._frameMinus(i).update('bonusCounter', -1);
//       }
//     }
//   }
// };

// if (this._isStrike(score)) {
//   this._currentFrame().add('bonusCounter', 2);
//   this._updateFrame();
//   return;
// }
// if (this._isSpare()) {
//   this._currentFrame().add('bonusCounter', 1);
// }

// if (this._isStrike(score)) {
//   this._currentFrame().add('bonusCounter', 2);
// } else if (this._isSpare()) {
//   this._currentFrame().add('bonusCounter', 1);
// }
