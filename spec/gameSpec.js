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

  describe('#addScore', function () {
    it('adds a score to a frame', function () {
      game.addScore(1);
      expect(game.frames[0].information.get('roll1')).toEqual(1);
    });

    it('automatically adds the score to roll2 on the frame', function () {
      game.addScore(1);
      game.addScore(2);
      expect(game.frames[0].information.get('roll2')).toEqual(2);
    });

    it('automatically adds the score to the next frame', function () {
      game.addScore(1);
      game.addScore(2);
      game.addScore(3);
      expect(game.frames[1].information.get("roll1")).toEqual(3);
    });
  });

  describe('#calculateTotal', function () {
    it('returns total for one score', function () {
      game.addScore(1);
      expect(game.calculateTotal()).toEqual(1);
    });

    it('returns total for two scores', function () {
      game.addScore(1);
      game.addScore(2);
      expect(game.calculateTotal()).toEqual(3);
    });

    it('returns total for multiple frames', function () {
      game.addScore(1);
      game.addScore(2);
      game.addScore(3);
      expect(game.calculateTotal()).toEqual(6);
    });
  });
});
