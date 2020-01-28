"use strict";

var myApp = angular.module('myApp', ['ngResource']);

//resource service provide angular the ability to communicate between multiple servers for the purpose of data transfer
//resource service provide mean shortcuts to simplify rest calls (Check fiew methods below ). relies on the http service and wraps it in order to do its work

myApp.factory('User', function($resource) {
	return $resource('url/:paramName', {paramName:'@param'});
});

myApp.controller('MainController', ['User', function(User) {
	var vm = this;
	vm.users = [];
	vm.selectedUser = null;
	
	this.getUsers = function() {
		//query the db and get all the users
		vm.users = User.query();
	};
	
	this.getUser = function(id) {
		vm.selectedUser = User.get({id:id});
	};
	
	this.deleteUSer = function(id) {
		vm.selectedUser = User.delete({id:id});
	}
	
	this.addUser = function(name) {
		var user =new User({name:name});
		user.$save(function(newUser, putResponseHeaders) {
			vm.selectedUser = newUser;
		});
	};
	
}]);
	