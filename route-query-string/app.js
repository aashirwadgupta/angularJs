"use strict";


//accessing route query strings
//reload pages using angular services

var myApp = angular.module('myApp', ['ngRoute']);

//it injects the routeProvider
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/welcome', {
			templateUrl:'../templates/welcome.html',
			controller: 'WelcomeController',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo:'/welcome'
		});
}]);



myApp.controller('WelcomeController', ['$route', function($route) {
	this.params = $route.current.params;
	this.details = "Hello, from WelcomeController.";
}]);