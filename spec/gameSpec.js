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

  describe('total', function () {
    it('returns one score added', function () {
      game.addScore('5');
      expect(game.total()).toEqual(5);
    });

    xit('returns two scores added', function () {
      game.addScore('5');
      game.addScore('6');
      expect(game.total()).toEqual(11);
    });
  });

  describe('addScore', function () {
    xit('adds a score to a frame', function () {
      game.addScore('5');
      // expect(game.frames).toEqual('test');
    });
  });
});
