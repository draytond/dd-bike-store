'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

beforeEach(module('bikeStoreFilters'));

describe('awesomeCheckmark', function() {

  it('should convert boolean values to unicode checkmark or cross',
      inject(function(awesomeCheckFilter) {
    expect(awesomeCheckFilter(true)).toBe('\u2713');
    expect(awesomeCheckFilter(false)).toBe('\u2718');
  }));
});
});
