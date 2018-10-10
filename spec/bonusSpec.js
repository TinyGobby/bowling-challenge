describe('Bonus', () => {
let bonus;

  beforeEach(() => {
    bonus = new Bonus();
  });

  describe('updateCounter', () => {
    xit('updates the bonus counter for spares', () => {

      expect(bonus.counter).toEqual(1);
    });

    xit('updates the bonus counter for strikes', () => {

      expect(bonus.counter).toEqual(2);
    });
  });
});

// it('adds a bonus on spares', () => {
//   game.addScore(1);
//   game.addScore(9);
//   game.addScore(2);
//   expect(game.frames[0].information.get('bonus')).toEqual(2);
// });

// it('adds a bonus on strikes', () => {
//   game.addScore(10);
//   game.addScore(1);
//   expect(game.frames[0].information.get('bonus')).toEqual(1);
// });

// it('adds a second bonus on strikes', () => {
//   game.addScore(10);
//   game.addScore(1);
//   game.addScore(2);
//   expect(game.frames[0].information.get('bonus')).toEqual(3);
// });

// it('adds a second bonus on double strike', () => {
//   game.addScore(10);
//   game.addScore(10);
//   game.addScore(1);
//   expect(game.frames[0].information.get('bonus')).toEqual(11);
// });

// it('works with three strikes', () => {
//   game.addScore(10);
//   game.addScore(10);
//   game.addScore(10);
//   expect(game.frames[0].information.get('bonus')).toEqual(20);
// });
