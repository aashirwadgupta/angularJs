"use strict";


//routing is an important part of an angular application (SPA - Single Page Application) allowing us to set client side navigations in the browser without reloading the page //repeatedly. they are also compliance to history and bookmark features
var myApp = angular.module('myApp', ['ngRoute']);

//it injects the routeProvider
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/about', {
			templateUrl:'../templates/about.html',
			controller: 'AboutController',
			controllerAs: 'vm'
		})
		.when('/contact', {
			templateUrl:'../templates/contact.html',
			controller: 'ContactController',
			controllerAs: 'vm'
		})
		.when('/welcome', {
			templateUrl:'../templates/welcome.html',
			controller: 'WelcomeController',
			controllerAs: 'vm'
		})
}]);

myApp.controller('AboutController', [function() {
	this.details = "Hello, from AboutController.";
}]);

myApp.controller('ContactController', [function() {
	this.details = "Hello, from ContactController.";
}]);

myApp.controller('WelcomeController', ['$route', function($route) {
	this.details = "Hello, from WelcomeController.";
	
	this.reload - function(){
		$route.reload('/welcome');
	}
}]);