"use strict";


var myApp = angular.module('myApp', ['ngRoute']);

//using template property in angular js for routing

//creating custom properties

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/about', {
			templateUrl:'../templates/about.html',
			controller: 'AboutController',
			controllerAs: 'vm',
			data: {
				customeKey1: 'CustomKey1, CustomValue1',
				customeKey1: 'CustomKey2, CustomValue2'
			}
		})
		.when('/welcome', {
			templateUrl:'../templates/welcome.html',
			controller: 'WelcomeController',
			controllerAs: 'vm',
			data: {
				customeKey3: 'CustomKey3, CustomValue3',
				customeKey4: 'CustomKey4, CustomValue4'
			}
		})
		.otherwise({
			redirectTo:'/welcome'
		});
}]);

//Using templates within the route
/*
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/welcome', {
			template:'<h3>Welcome</h3><p>{{vm.details}}</p>',
			controller: 'WelcomeController',
			controllerAs: 'vm'
		})
		.when('/about', {
			template:'<h3>About Us</h3><p>{{vm.details}}</p>',
			controller: 'AboutController',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo:'/welcome'
		});
}]);
*/

myApp.controller('WelcomeController', ['$route', function($route) {
	this.details = "Hello, from WelcomeController.";
	this.data = $route.current.data;
}]);

myApp.controller('AboutController', ['$route', function($route) {
	this.details = "Hello, from AboutController.";
	this.data = $route.current.data;
}]);