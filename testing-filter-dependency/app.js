"use strict";

var myApp = angular.module('myApp', []);

myApp.service('TransformService', function() {
	this.transform = function(value, mode) {
		var result = null;
		switch(mode) {
			case 'dashes' :
				result = value.replace(/\s/g, '-');
				break;
			
			case 'capitalize' :
				var words = value.split(' ');
				for (var counter = 0; counter < words.length; counter++) {
					words[counter] = words[counter].substr(0,1).toUpperCase() + words[counter].substr(1).toLowerCase();
				}
				result = words.join(' ');
				break;
		}
		return result;
	};
});

myApp.filter('transform', function(TransformService) {
	return function(value, mode) {
		return TransformService.transform(value, mode);
	};
});

myApp.controller('MainController', ['$filter', function($filter) {
	var transformFilter = $filter('transform');
	
	this.firstValue = 'This is a test of the filter service to check dashes.';
	
	this.secondValue = transformFilter('This is a second test added in the controller to check capitalize.', 'dashes');
	
	//Applying filter dynamically using ng-change
	
	this.thirdValue = '';
	
	this.applyDashesFilter = function() {
		this.thirdValue = transformFilter(this.inputValue, 'dashes');
	};
	
	this.applyCapitalizeFilter = function() {
		this.thirdValue = transformFilter(this.inputValue, 'capitalize');
	};
	
}]);