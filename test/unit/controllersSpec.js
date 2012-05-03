'use strict';

/* jasmine specs for controllers go here */

describe('countries controllers', function () {

  describe('CountryListCtrl', function () {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/countries.json').
          respond([{ "capital" : "Kabul", "city_population" : 1780000, "code" : "AFG", "continent" : "Asia", "country" : "Afghanistan", "country_population" : 22720000 } ]);

      scope = $rootScope.$new();
      ctrl = $controller(CountryListCtrl, {$scope: scope});
    }));

    it('should should create table with 231 countries from xhr', function() {
      expect(scope.countries).toBeUndefined();
      $httpBackend.flush();
      expect(scope.countries).toEqual( [ { capital : 'Kabul', city_population : 1780000, code : 'AFG', continent : 'Asia', country : 'Afghanistan', country_population : 22720000 } ]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('country');
    });

    it('should have title of "World countries and capitals app"', function () {
      expect(scope.title).toBe('World countries and capitals app');
    });

    it('should return number of countries from getCountriesLength() equal to 231', function () {
      expect(scope.getCountriesLength).toEqual = 231;
    });

  });

  describe('CountryDetailsCtrl', function () {

  });

});