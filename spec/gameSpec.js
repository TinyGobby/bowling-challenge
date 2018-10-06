'use strict';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  describe('frames', function () {
    it('initialises with ten frames', function () {
      expect(game.frames).toBeArrayOfSize(10);
    });
  });  

  describe('addScore', function () {
    it('adds a score to a frame', function () {
      game.addScore(5);
      expect(game.frames[0].information.get('roll1')).toEqual(5);
    });

    it('automatically adds the score to roll2 on the frame', function () {
      game.addScore(5);
      game.addScore(4);
      expect(game.frames[0].information.get('roll2')).toEqual(4);
    });
  });

  describe('total', function () {
    it('returns one score added', function () {
      game.addScore(5);
      expect(game.total()).toEqual(5);
    });

    it('returns two scores added', function () {
      game.addScore(5);
      game.addScore(4);
      expect(game.total()).toEqual(9);
    });
  });
});
