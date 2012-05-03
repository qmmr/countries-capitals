/* Author: Marcin Kumorek 05.2012 */

'use strict';

// Declare app level module which depends on filters, and services
angular.module('countries', ['countries.filters', 'countries.services', 'countries.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/countries', {template: 'partials/country-list.html', controller: CountryListCtrl}).
      when('/countries/:countryId', {template: 'partials/country-details.html', controller: CountryDetailsCtrl}).
      otherwise({redirectTo: '/countries'});
}]);