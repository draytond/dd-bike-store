'use strict';

/* jasmine specs for controllers go here */

describe('BikesOverviewCtrl', function() {
	beforeEach(module('bikeStoreApp'));

    it("should put 5 bikes on the scope", inject(function($controller) {
		var scope = {};
		var ctrl = $controller('BikesOverviewCtrl', {$scope: scope});

		expect(scope.bikes.length).toBe(5);
  	}));

});
