'use strict';

/* jasmine specs for controllers go here */
describe('Bike Store controllers', function() {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  beforeEach(module('bikeStoreApp'));
  beforeEach(module('bikeStoreServices'));

  describe('bikeDetailCtrl', function() {
    var scope, ctrl, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('bikes/zzz.json').respond({name: 'best bike', images: 'path.jpg'});
      $routeParams.id = 'zzz';
      scope = $rootScope.$new();
      ctrl = $controller('bikeDetailCtrl', {$scope: scope});
    }));

    it('should return data relating to the specific bike', function() {
      expect(scope.bike).toBeUndefined;

      $httpBackend.flush();

      expect(scope.bike).toEqualData({name: 'best bike', images: 'path.jpg'});
    });
  });

  describe('BikesOverviewCtrl', function() {
  	var scope, ctrl, $httpBackend;

  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
  		$httpBackend = _$httpBackend_; // to avoid name conflict
  		$httpBackend.expectGET('bikes/allbikes.json').respond([{name: 'myBike', images: 'path.jpg'}]);

  		scope = $rootScope.$new();
  		ctrl = $controller('BikesOverviewCtrl', {$scope: scope});
  	}));

  	it("should make the bikes model with just 1 bike fetched via $http", function() {
  		expect(scope.bikes).toEqualData([]);

  		$httpBackend.flush();

  		expect(scope.bikes).toEqualData([{name: 'myBike', images: 'path.jpg'}]);
  	});

  	it("should set the default filter to be by Name", function() {
		  expect(scope.order).toBe('name');
  	});
  });
});
