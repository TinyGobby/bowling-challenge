'use strict';

describe('Frame', function () {
  let frame;

  beforeEach(function () {
    frame = new Frame(0);
  });

  describe('#total', function () {
    it('initializes with 0', function () {
      expect(frame.total()).toEqual(0);
    });

    // As a player,
    // So that I know how I am doing,
    // I want to see my total.
    it('sums up the rolls and bonuses', function () {
      frame.add('roll1', 1);
      frame.add('roll2', 2);
      frame.add('bonus1', 3);
      frame.add('bonus2', 4);
      expect(frame.total()).toEqual(10);
    });
  });


  describe('#roll', function () {
    // As a player,
    // So that I can keep a record of my scores,
    // I want to be able to add a score for a roll.
    it('adds a roll score to the frame', function () {
      frame.add('roll1', 5);
      expect(frame.information.get('roll1')).toEqual(5);
    });
  });
});
