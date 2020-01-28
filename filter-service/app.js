"use strict";

//the filter services in angular js gives us a way to act as built in filters or own custom filters. 
var myApp = angular.module('myApp', []);

myApp.filter('dashes', function() {
	return function(value) {
		//replace all whitespaces with dash
		value = value.replace(/\s/g, '-');
		return value;
	}
});

//to use filter in code, we inject the filter service in our controller

myApp.controller('MainController', ['$filter', function($filter){
	
	var dashFilter = $filter('dashes');
	
	this.firstValue = 'This is a test of the filter service.';
	
	this.secondValue = dashFilter('This is a second test added in the controller.');
	
	//Applying filter dynamically using ng-change
	
	this.thirdValue = '';
	
	this.applyFilter = function() {
		this.thirdValue = dashFilter(this.inputValue);
	}
	
}]);