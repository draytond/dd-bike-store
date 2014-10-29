'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('bikeStoreApp'));

  // Test service availability
  xit('check the existence of bike factory', inject(function(Bike) {
      expect(Bike).toBeDefined();
  }));
});
