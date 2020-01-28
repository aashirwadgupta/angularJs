"use strict";

//ngShow and ngHide utilise display:none, that means the elements remian in the DOM just hidden
// we may add and remove elements using ngIf directive which adds elements only if the wrapped condition is true

var myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$scope', function($scope){
	
	$scope.showUser = false;
	
	$scope.user = {
		name: 'Aashirwad Gupta',
		age: 26,
		isActive: true
	};
	
	$scope.hobbies = 'Reading, Poetry, Cooking';
	
}]);
