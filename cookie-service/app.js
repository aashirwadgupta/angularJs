"use strict";

//the cookies service in angular js can be used to store the cookies session objects as key value pair
//Any object added with a put or retrieved with a get, will be serialized or deserialized by a json if we use proper methods
//save, view and remove cookie from cookieStorage

var myApp = angular.module('myApp', ['ngCookies']);

myApp.controller('MainController', ['$cookies', function($cookies){
	
	var vm = this;
	
	vm.keys = [];
	
	vm.addItem = function(itemKey, itemValue) {
		vm.keys.push(itemKey);
		$cookies.put(itemKey, itemValue);
	};
	
	vm.getItem = function(itemKey) {
		vm.currentItem = $cookies.get(itemKey);
	};
	
	vm.getItemValue = function(itemKey) {	
		return $cookies.get(itemKey);
	};
	
	vm.removeItem =function(itemKey) {
		vm.keys = vm.keys.filter(function(key) {
			return (key!==itemKey);
		});
		$cookies.remove(itemKey);
	};
}]);