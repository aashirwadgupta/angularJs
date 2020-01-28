"use strict";

var myApp = angular.module('myApp', []);

//http service allows angular js to communicate with remote servers for data transfer. Using this we can make get, put, post, delete requests.
//We will learn how to post data to the server using angular js http service

myApp.service('AppModel', function($http) {
	this.users = [];
	
	this.addUser = function(object) {
		$http.post('url', object)
			.then(function(response) {
				this.users.push(response.data);
			}.bind(this),
			function(response) {
				console.log('Error occurred while post.');
			});
	};
	
});

myApp.controller('MainController', ['AppModel', function(AppModel){
	this.model = AppModel;
}]);
	