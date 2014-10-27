'use strict';

/* Controllers */
var bikeStoreControllers = angular.module("bikeStoreControllers", []);

bikeStoreControllers.controller("BikesOverviewCtrl", ["$scope", "$http",
	function($scope, $http){
		$http.get('bikes/allbikes.json').success(function(data) {
			$scope.bikes = data;
		});

	$scope.order = 'name';
}]);

bikeStoreControllers.controller("bikeDetailCtrl", ["$scope", "$routeParams", "$http",
	function($scope, $routeParams, $http) {
    $http.get('bikes/' + $routeParams.id + '.json').success(function(data) {
      $scope.bike = data;
    });
		$scope.currentId = $routeParams.id;
}]);
