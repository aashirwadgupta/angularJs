"use strict";

//

var myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$scope', function($scope){
	
	this.names = ['Aashirwad', 'Suraj', 'Raghu', 'Shailesh', 'Chaitanya', 'Kumar', 'Sagar']	;
	this.getType = function(value) {
		return typeof(value);
	}
}]);
