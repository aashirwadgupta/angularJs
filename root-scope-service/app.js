"use strict";

//the root scope service provides access to application's main or top level scope
 
var myApp = angular.module('myApp', []);

//When application starts, it calls config then run method (if defined)
myApp.run(function($rootScope) {
	
	$rootScope.baseValue = 'This value is saved on the top-level root scope.';
	
	//if any of the controller defines value or function with the same name, the content/functionality gets replaced
	$rootScope.sayHello = function() {
		alert("Hello from root scope");
	}
});

//Add a property / method to root scope and access it via child scope

myApp.controller('MainController', ['$scope', function($scope){
	
}]);