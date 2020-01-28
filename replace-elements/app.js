"use strict";

var myApp = angular.module('myApp', []);

myApp.directive('tstVehicleView', function() {
	return {
		scope: {
			item:'='
		},
		templateUrl: 'templates/vehicle.html',
		restrict: 'E'
	};
});

myApp.controller('MainController', ['$scope', function($scope){
	
	$scope.item = {
		year:2013,
		make: 'Bajaj',
		model: 'Pulsar 150 DTSi',
		price: 78999
	};
	
	$scope.firstItem = {
		year:2013,
		make: 'Bajaj',
		model: 'Avenger',
		price: 150236
	};
	
	$scope.secondItem = {
		year:2013,
		make: 'KTM',
		model: 'DUKE 200',
		price: 125000
	};
}]);