'use strict';

function Game() {
  this.frames = [];
  this._addFrames();
};

Game.prototype._addFrames = function () {
  for (let i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  };
};