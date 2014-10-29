'use strict';

/* Controllers */
var bikeStoreControllers = angular.module("bikeStoreControllers", []);

bikeStoreControllers.controller("BikesOverviewCtrl", ["$scope", "Bike",
	function($scope, Bike) {
	 $scope.bikes = Bike.query();
	 $scope.order = 'name';
  }
]);

bikeStoreControllers.controller("bikeDetailCtrl", ["$scope", "$routeParams", "Bike",
	function($scope, $routeParams, Bike) {
    $scope.bike = Bike.get({id: $routeParams.id}, function(bike){
      $scope.currentBikePic = $scope.bike.images[0];
    });

    $scope.bigPic = function(img) {
      $scope.currentBikePic = img;
    }
}]);
