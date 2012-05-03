'use strict';

/* Controllers */

function CountryListCtrl ($scope, $http) {
  $http.get('data/countries.json').success(function(data) {
    $scope.countries = data;
    // $scope.countries = data.splice(0, 20); // limit to first 5 countries
  });

  $scope.title = "World countries and capitals app";

  $scope.getCountriesLength = function() {
    return $scope.countries.length;
  }

  $scope.clearQuery = function() {
    $scope.query = '';
  }

  $scope.orderProp = 'country';

}
// CountryListCtrl.$inject = ['$scope', '$http'];

function CountryDetailsCtrl ($scope, $routeParams) {
  $scope.countryId = $routeParams.countryId;
}
// CountryDetailsCtrl.$inject = ['$scope', '$routeParams'];