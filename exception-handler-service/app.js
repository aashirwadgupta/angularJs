"use strict";


var myApp = angular.module('myApp', []);

myApp.factory('$exceptionHandler', function() {	
	return function(exception, cause) {
		alert('Oops, an error occurred!');
		console.log('Oops, an error occurred!');
	};
});

myApp.controller('MainController', [function(){
	
	this.throwError = function() {
		throw new Error('This is a sample Exception');
	}
}]);