"use strict";

var myApp = angular.module('myApp',[]);

//convention is to use 2 or 3 characters prefix (test -tst)
myApp.directive('tstVehicleView', function() {
	return {
		//creating an isolated scope
		//create new scope for every use of directive
		//angular creates a two way data binding between outer scope and directive's isolated scope
		scope: {
			item:'='
			//item: 'someItem'
			//when we specify the name, it will look to that name. but when we do someItem, then it allows us to change the name of external item
			//property vs internal item property. but convention is to use the same, so we are using =			
		},
		//template: '<p>This is a template</p>'
		templateUrl: '../templates/vehicle.html',
		//Element, Atrribute, Class
		restrict: 'EA'
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