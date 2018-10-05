'use strict';

// As a player,
// So that I know how I am doing,
// I want to see my total.

describe('Total', function () {
  let total;

  beforeEach(function () {
    total = new Total();
  });

  describe('#sum', function () {
    it('has a default value of 0', function () {
      expect(total.sum).toEqual(0);
    });
  });

  describe('#add', function() {
    it('adds all the elements in an array', function() {
      total.add([1, 2, 3, 4]);
      expect(total.sum).toEqual(10);
    });
  });
});
