'use strict';

/* jasmine specs for controllers go here */

describe('BikesOverviewCtrl', function() {
	var scope, ctrl, $httpBackend;

	beforeEach(module('bikeStoreApp'));

	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
		$httpBackend = _$httpBackend_; // to avoid name conflict
		$httpBackend.expectGET('bikes/allbikes.json')
			.respond([{name: 'myBike'}]);

		scope = $rootScope.$new();
		ctrl = $controller('BikesOverviewCtrl', {$scope: scope});
	}));

  	it("should make the bikes model with just 1 bike fetched via $http", function() {
		expect(scope.bikes).toBeUndefined();

		$httpBackend.flush();

		expect(scope.bikes).toEqual([{name: 'myBike'}]);
  	});

  	it("should set the default filter to be by Name", inject(function($controller) {
		expect(scope.order).toBe('name');
  	}));
});
