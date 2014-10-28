'use strict';

/* Filters */
angular.module("bikeStoreFilters", []).filter("awesomeCheck", function() {
  return function(bool) {
    return bool ? '\u2713' : '\u2718';
  };
});
