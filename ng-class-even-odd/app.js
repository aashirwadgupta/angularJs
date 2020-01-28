"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller("MainController", [function() {
	
	this.foodList = [
		{name:'Apples', price:100},
		{name:'Beans', price:150},
		{name:'Carrots', price:30},
		{name:'Bread', price:20},
		{name:'Cheese', price:250},
		{name:'Chicken', price:120},
		{name:'Eggs', price:30},
		{name:'Milk', price:40}
	];
	
}]);