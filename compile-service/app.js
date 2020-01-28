"use strict";

//compile service can be used to compile an HTML string or DOM into a template which can then be used to link a scope and template together
//Allow us to create HTML and angular compliant element and append them to the DOM

var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$compile', function($scope, $compile){
	
	this.addNewField = function(htmlMarkup) {
		//calling scope is also important as any of the html element that has data binding and expression 
		//will be evaluated against the scope
		var newElement = $compile(htmlMarkup)($scope);
		var parentElement = angular.element("#myDiv");
		parentElement.append(newElement);
	};
	
}]);
