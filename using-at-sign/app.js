"use strict";

var myApp = angular.module('myApp',[]);


myApp.directive('tstVehicleView', function() {
	return {
		scope: {
			//@ means you can attach a literal or a number or a value of scope. one way data binding. angular will convert it to string.
			year: '@',
			make: '@',
			model: '@',
			info: '@'
		},
		templateUrl: 'templates/vehicleAt.html',
		restrict:'AE',
		controller: function($scope) {
			console.log('typeof(year): ', typeof($scope.year));
			console.log('typeof(make): ', typeof($scope.make));
			console.log('typeof(model): ', typeof($scope.model));
			console.log('typeof(info): ', typeof($scope.info));
		}
	};
});
myApp.controller('MainController', ['$scope', function($scope){
	
	this.firstItemInfo = {
		horsePower:255,
		fuel:'diesel',
		doors:4,
		price: 19999
	};
	
	this.secondItemInfo = {
		horsePower: 300,
		fuel: 'petrol',
		doors: 5,
		price 24349
	}
}]);