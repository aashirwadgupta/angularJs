"use strict";

//the window service in angular js provides reference to the browser window object. The document service provides access to the window.document object. Accessing the native js objects with these services makes testing/mocking easier since these services operate within the angular context
 
var myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$window', '$document', function($window, $document){
	
	//we are using $window as it is aware of angular's digest mechanism and will help in testing as well
	this.useWindowService = function() {
		window.alert('Hello.');
	};
	
	this.useDocService = function() {
		console.log($document);
		//don't do this in production, use css
		$document[0].bgColor = 'blue';
	}
	
}]);