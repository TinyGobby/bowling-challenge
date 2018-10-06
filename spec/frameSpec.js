'use strict';

describe('Frame', function () {
  let frame;

  beforeEach(function () {
    frame = new Frame(0);
  });

  // As a player,
  // So that I know how I am doing,
  // I want to see my total.
  describe('#total', function () {
    it('initializes with 0', function () {
      expect(frame.total()).toEqual(0);
    });

    it('sums up the rolls and bonuses', function () {
      frame.add('roll1', 1);
      frame.add('roll2', 2);
      frame.add('bonus1', 3);
      frame.add('bonus2', 4);
      expect(frame.total()).toEqual(10);
    });
  });

  describe('#add', function () {
    // As a player,
    // So that I can keep a record of my scores,
    // I want to be able to add a score for a roll.
    it('adds a roll score to the frame', function () {
      frame.add('roll1', 5);
      expect(frame.information.get('roll1')).toEqual(5);
    });

    // As a player,
    // So that my scores are correct,
    // I want to be notified when I put too high a score in.
    it('throws an error if the second roll is too high', function () {
      frame.add('roll1', 5);
      expect(function() { frame.add('roll2', 6); } ).toThrowError('Second roll too high');
    });
  });
});
