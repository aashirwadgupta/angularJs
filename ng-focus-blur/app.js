"use strict";

var myApp = angular.module('myApp',[]);
//ngFocus and ngBlur directives allows to define custom functionality that is executed when an input element gains or loses focus
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