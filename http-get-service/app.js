"use strict";

var myApp = angular.module('myApp', []);

//http service allows angular js to communicate with remote servers for data transfer. Using this we can make get, put, post, delete requests.
//We will learn how to request data from the http service server

myApp.service('AppModel', function($http) {
	
	this.states = [{name:'Aashirwad', abbreviation:'Aash'}, {name:'India', abbreviation:'Ind'}];
	this.location = 'Default Location';
	this.name = 'Default Name';
	this.email = 'default.mail@mail.com';
	this.searchName = '';
	this.getDataOfPerson = function(searchName) {
		$http.get('https://api.github.com/users/'+searchName)
			.then(function(response) {
				this.name = response.data.name;
				this.location = response.data.location;
				this.email = response.data.email;
			}
			.bind(this),
			function(response){
				console.log(response.data);
			});
	}
});

myApp.controller('MainController', ['AppModel', function(AppModel){
	this.model = AppModel;
}]);
	