'use strict';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('frames', function () {
    it('initialises with ten frames', function () {
      console.log(game.frames)
      expect(game.frames).toBeArrayOfSize(10);
    });
  });
});