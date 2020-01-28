"use strict";

var myApp = angular.module('myApp', []);

myApp.directive('tstAnimalView', function() {
	return {
		scope: {
			item:'='
		},
		templateUrl: 'templates/animal.html',
		restrict: 'AE',
		name:'controllerName'
	};
});

myApp.controller('BirdController',['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'flying';
	};
}]);

myApp.controller('HorseController',['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'running';
	};
}]);

myApp.controller('SnakeController',['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'slithering';
	};
}]);

myApp.controller('MainController', ['$scope', function($scope){
	
	$scope.bird = {
		name:'bird'
	};
	
	$scope.horse = {
		name:'horse'
	};
	
	$scope.snake = {
		name:'snake'
	};
}]);