"use strict";

//parse service is used to compile angular expressions and convert them into functions

var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$parse', function($parse){
	
	//view model
	var vm = this;
	vm.executeMultiply = function() {
		var part = {part: {id: '432401'}};
		var multiply = $parse('8*5');
		var getId = $parse('part.id');
		
		//now multiply will be considered as function
		vm.results = multiply();
		
		//getId will also be considered as function now
		vm.idOfPart = getId(part);
	}
}]);
