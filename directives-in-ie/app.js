"use strict";

var myApp = angular.module('myApp',[]);

//using IE8 or less which cannot render custom elements
//restrict is a string of 0 or more codes that tell how it can be used, in this case directive can be used as an Attribute, Element, Class
//directive name declared as camelCase but used in HTML as train case
myApp.directive('myDirective', function() {
	return {
		template:'Hello, From Aashirwad.',
		restrict: 'AEC'
	}
});

myApp.controller('MainController', [function() {
	this.user = {
		name:''
	};
	
	this.message='';
	
	this.sayHello = function() {
		this.message = 'Hello, Please enter your name!';
	};
	
	this.sayGoodbye = function() {
		if(!this.user.name || this.user.name.length == 0) {
			this.message = 'Awww, you didn\'t enter your name!';
		} else {
			this.message = 'Thanks for entering your name, '+this.user.name+'.';
		}
	};
	
}]);