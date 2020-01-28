"use strict";

var myApp = angular.module('myApp',[]);

myApp.service('TestService', function() {
	var _data="xyz123";
	
	this.getData = function() {
		return _data;
	}
});

//While testing angular js application we can choose any number of tools
//Popular is -
//Karma as the test runner and jasmine as the framework for creating the actual unit tests


myApp.controller('MainController', ['TestService', function(TestService) {
	
	this.model = TestService;
	
	this.getData = function() {
			this.data = this.model.getData();
		
	};
	
}]);