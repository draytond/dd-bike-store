'use strict';

/* App Module */
var bikeStoreApp = angular.module('bikeStoreApp', ['bikeStoreControllers',
	'ngRoute', 'bikeStoreFilters', 'bikeStoreServices']);

bikeStoreApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/bikes', {
				templateUrl: 'partials/bikes-overview.html',
				controller: 'BikesOverviewCtrl'
			})
			.when('/details/:id', {
				templateUrl: 'partials/bike-info.html',
				controller: 'bikeDetailCtrl'
			})
			.otherwise({
				redirectTo: '/bikes'
			});
}]);
