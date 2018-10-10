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

  //  Refactor game.frames[i].information.get(something) in gameSpec(maybe into a spec helper?)
  describe('#addScore', () => {
    it('errors if the score is not a number between 0 and 10', function () {
      expect(function () { game.addScore('test') }).toThrowError('Incorrect input, please give a number between 0 and 10');
    });

    it('adds a score to a frame', () => {
      game.addScore(1);
      expect(game.frames[0].information.get('roll1')).toEqual(1);
    });

    it('automatically adds the score to roll2 on the frame', () => {
      game.addScore(1);
      game.addScore(2);
      expect(game.frames[0].information.get('roll2')).toEqual(2);
    });

    it('errors if the second roll is too high', function () {
      game.addScore(5);
      expect(function () { game.addScore(6) }).toThrowError('Second roll too high');
    });

    it('automatically changes frame after two rolls', () => {
      game.addScore(1);
      game.addScore(2);
      game.addScore(3);
      expect(game.frames[1].information.get('roll1')).toEqual(3);
    });

    it('automatically changes frame after a strike', () => {
      game.addScore(10);
      game.addScore(1);
      expect(game.frames[1].information.get('roll1')).toEqual(1);
    });

    it('adds a bonus on spares', () => {
      game.addScore(1);
      game.addScore(9);
      game.addScore(2);
      expect(game.frames[0].information.get('bonus')).toEqual(2);
    });

    it('adds a bonus on strikes', () => {
      game.addScore(10);
      game.addScore(1);
      expect(game.frames[0].information.get('bonus')).toEqual(1);
    });

    it('adds a second bonus on strikes', () => {
      game.addScore(10);
      game.addScore(1);
      game.addScore(2);
      expect(game.frames[0].information.get('bonus')).toEqual(3);
    });

    it('adds a second bonus on double strike', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      expect(game.frames[0].information.get('bonus')).toEqual(11);
    });

    it('works with three strikes', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      expect(game.frames[0].information.get('bonus')).toEqual(20);
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
      expect(game.frames[9].information.get('bonus')).toEqual(1);
    });

    it('adds a bonus on a strike', () => {
      game.addScore(10);
      game.addScore(10);
      expect(game.frames[9].information.get('roll2')).toEqual(10);
    });

    it('adds a second bonus on a strike', () => {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      expect(game.frames[9].information.get('bonus')).toEqual(10);
    });
  });
});
