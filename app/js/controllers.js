'use strict';

/* Controllers */
var bikeStoreApp = angular.module("bikeStoreApp", []);

bikeStoreApp.controller("BikesOverviewCtrl", ["$scope", "$http", function($scope, $http){
	$http.get('bikes/allbikes.json').success(function(data) {
		$scope.bikes = data;
	});

	$scope.order = 'name';
}]);