"use strict";


//with location service we can change the path or url of our application to perform navigation
//now we will perform client side routing in our application

//location service also provide functionaliy with regard to url
//we can use it to route it to different routes without making an entry in browser's history

var myApp = angular.module('myApp', ['ngRoute']);

//it injects the routeProvider
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/about', {
			templateUrl:'../templates/about.html',
			controller: 'AboutController',
			controllerAs: 'vm'
		})
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
	this.details = "Hello, from WelcomeController.";
}]);

myApp.controller('AboutController', ['$route', function($route) {
	this.details = "Hello, from AboutController.";
}]);

//below will replace the history
myApp.controller('NavController', ['$location', function($location) {
	this.goto = function(path) {
		$location.replace();
		$location.path(path);
	}
}]);

/*
myApp.controller('NavController', ['$location', function($location) {
	this.goto = function(path) {
		$location.path(path);
	}
}]); */