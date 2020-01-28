"use strict";


//routing is an important part of an angular application (SPA - Single Page Application) allowing us to set client side navigations in the browser //without reloading the page //repeatedly. they are also compliance to history and bookmark features
//in production single page applications we can use route and route-parameters to display information as necessary and pass info to specific views.
//route-parameters can be appended to route and be accessed from our controllers in order to drive the app dynamically

var myApp = angular.module('myApp', ['ngRoute']);

//it injects the routeProvider
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/product/:productId', {
			templateUrl:'../templates/product.html',
			controller: 'ProductController',
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

myApp.controller('ProductController', ['$routeParams', function($routeParams) {
	this.details = "Hello, from ProductController.";
	this.productId = $routeParams.productId;
}]);



myApp.controller('WelcomeController', [function() {
	this.details = "Hello, from WelcomeController.";
}]);