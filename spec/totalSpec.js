'use strict';

describe('Total', function() {
  var total

  beforeEach(function() {
    total = new Total();
  });

  describe('#sum', function() {
    it('has a default value of 0', function() {
      expect(total.sum).toEqual(0);
    });
  });
});