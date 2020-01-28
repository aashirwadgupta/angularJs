"use strict";

var myApp = angular.module('myApp', []);

myApp.service('AppModel', function() {
	//service instatiates function itself
	this.user = {
		name: 'User in Service'
	};
	
	this.sayHello = function() {
		alert('Hello From Angular js.');
	};
});


myApp.service('AppModel', function() {
	//factory instantiates an object and return that object
	//var model= {};
	
	this.user = {
		name: 'User in Service'
	};
	
	this.sayHello = function() {
		alert('Hello From Angular js.');
	};
	
	//return model;
});


myApp.controller('MainController', ['AppModel', function(AppModel){
	this.model = AppModel;
}]);

myApp.controller('FirstController', ['AppModel', function(AppModel) {
	this.model = AppModel;
	
	this.user = {
		name: 'User of First'
	};
	
}]);

myApp.controller('SecondController', ['AppModel', function(AppModel) {
	this.model = AppModel;
	
	this.user = {
		name: 'User of Second'
	};
	
}]);
	