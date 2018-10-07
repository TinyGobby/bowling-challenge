'use strict';

describe('Frame', function () {
  let frame;

  beforeEach(function () {
    frame = new Frame(0);
  });

  describe('#calculateFrameTotal', function () {
    it('initializes with 0', function () {
      expect(frame.calculateFrameTotal()).toEqual(0);
    });

    it('sums up the rolls and bonuses', function () {
      frame.add('roll1', 1);
      frame.add('roll2', 2);
      frame.add('bonus', 3);
      expect(frame.calculateFrameTotal()).toEqual(6);
    });
  });

  describe('#add', function () {
    it('adds a roll score to the frame', function () {
      frame.add('roll1', 5);
      expect(frame.information.get('roll1')).toEqual(5);
    });

    it('errors if the second roll is too high', function () {
      frame.add('roll1', 5);
      expect(function() { frame.add('roll2', 6) } ).toThrowError('Second roll too high');
    });

    it('errors if the score is not a number between 0 and 10', function () {
      expect(function() { frame.add('roll1', 'test') } ).toThrowError('Incorrect input, please give a number between 0 and 10');
    });
  });

  describe('#update', function () {
    it('updates a specific key', function() {
      frame.add('bonus', 5)
      frame.update('bonus', 5)
      expect(frame.information.get('bonus')).toEqual(10);
    });

    it('works with a negative number', function () {
      frame.add('bonus', 5)
      frame.update('bonus', -4)
      expect(frame.information.get('bonus')).toEqual(1);
    });
  });
});
