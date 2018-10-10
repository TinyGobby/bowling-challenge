describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('frames', () => {
    it('initialises with ten frames', () => {
      expect(game.frames).toBeArrayOfSize(10);
    });
  });

  describe('#check', () => {
    it('gets the information from the right frame', () => {
      expect(game.check(0, 'roll1')).toEqual(0);
    });
  });

  describe('#addScore', () => {
    it('errors if the score is not a number between 0 and 10', () => {
      expect(() => {
        game.addScore('test');
      }).toThrowError('Incorrect input, please give a number between 0 and 10');
    });

    it('adds a score to a frame', () => {
      game.addScore(1);
      expect(game.check(0, 'roll1')).toEqual(1);
    });

    it('automatically adds the score to roll2 on the frame', () => {
      game.addScore(1);
      game.addScore(2);
      expect(game.check(0, 'roll2')).toEqual(2);
    });

    it('errors if the second roll is too high', () => {
      game.addScore(5);
      expect(() => {
        game.addScore(6);
      }).toThrowError('Second roll too high');
    });

    it('automatically changes frame after two rolls', () => {
      game.addScore(1);
      game.addScore(2);
      game.addScore(3);
      expect(game.check(1, 'roll1')).toEqual(3);
    });

    it('automatically changes frame after a strike', () => {
      game.addScore(10);
      game.addScore(1);
      expect(game.check(1, 'roll1')).toEqual(1);
    });

    it('adds a bonus on spares', () => {
      game.addScore(1);
      game.addScore(9);
      game.addScore(2);
      expect(game.check(0, 'bonus')).toEqual(2);
    });

    it('adds a bonus on strikes', () => {
      game.addScore(10);
      game.addScore(1);
      expect(game.check(0, 'bonus')).toEqual(1);
    });

    it('adds a second bonus on strikes', () => {
      game.addScore(10);
      game.addScore(1);
      game.addScore(2);
      expect(game.check(0, 'bonus')).toEqual(3);
    });

    it('adds a second bonus on double strike', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      expect(game.check(0, 'bonus')).toEqual(11);
    });

    it('works with three strikes', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      expect(game.check(0, 'bonus')).toEqual(20);
    });
  });

  describe('#calculateTotal', () => {
    it('returns total for one score', () => {
      game.addScore(1);
      expect(game.calculateTotal()).toEqual(1);
    });

    it('returns total for two scores', () => {
      game.addScore(1);
      game.addScore(2);
      expect(game.calculateTotal()).toEqual(3);
    });

    it('returns total for multiple frames', () => {
      game.addScore(1);
      game.addScore(2);
      game.addScore(3);
      expect(game.calculateTotal()).toEqual(6);
    });
  });

  describe('Tenth Frame', () => {
    beforeEach(() => {
      for (let i = 0; i < 9; i++) {
        game.addScore(10);
      }
    });

    it('adds a bonus on a spare', () => {
      game.addScore(9);
      game.addScore(1);
      game.addScore(1);
      expect(game.check(9, 'bonus')).toEqual(1);
    });

    it('adds a bonus on a strike', () => {
      game.addScore(10);
      game.addScore(10);
      expect(game.check(9, 'roll2')).toEqual(10);
    });

    it('adds a second bonus on a strike', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      expect(game.check(9, 'bonus')).toEqual(10);
    });
  });
});
