"use strict";

var myApp = angular.module('myApp', []);

//Testing a custom service with dependencies on other services

myApp.service('RandomNameService', function() {
	var firstNames = ['Aashirwad', 'Kumar', 'Sagar', 'Raveendra', 'Sagar'];
	var lastNames = ['Gupta', 'Kalamadi', 'Uppar', 'Hegde', 'Shetty'];
	
	this.getFirstName = function() {
		var index = Math.floor(Math.random() * firstNames.length);
		return firstNames[index];
	};
	
	this.getLastName = function() {
		var index = Math.floor(Math.random() * lastNames.length);
		return lastNames[index];
	};
});

myApp.service('UserService', function(RandomNameService) {
	this.getFullName = function() {
		return RandomNameService.getFirstName() + ' ' + RandomNameService.getLastName();
	};
});

myApp.controller('MainController', ['UserService', function(UserService) {
	
	this.name = '';
	
	this.getName = function() {
		this.name = UserService.getFullName();
	};
	
}]);