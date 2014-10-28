'use strict';

/* Services */

var bikeStoreServices = angular.module('bikeStoreServices', []);

bikeStoreServices.factory('Bike', ['$resource',
  function() {
    return $resource('bikes/:id.json', {}, {
      query: {method: 'GET', params: {id: 'bike'}, isArray: true}
    });
}]);
