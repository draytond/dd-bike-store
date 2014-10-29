'use strict';

/* Services */
var bikeStoreServices = angular.module('bikeStoreServices', ['ngResource']);

bikeStoreServices.factory('Bike', ['$resource',
  function($resource) {
    return $resource('bikes/:id.json', {}, {
      query: {method: 'GET', params: {id: 'allbikes'}, isArray: true}
    });
}]);
