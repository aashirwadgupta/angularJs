"use strict";

var myApp = angular.module('myApp', []);

//the q service in angular js helps us to make asynchronus calls
//using in conjuction with http service the q service provides us with a decent solution to make a http request that doesn't involve passing around //callbacks and anonymous functions

//when performing actions such as requesting access to server data, we can't be sure of the exact time in the future the data will be available to us. Therefore using q service and promises allows us to setup code that handle an asynchronus response without waiting for or blocking the application


myApp.service('AppModel', function($http, $q, $timeout) {
	
	this.getUser = function(searchName) {
		
		//creates a new object that is going to defer the promise until it sends back
		var defer = $q.defer();
		
		$http.get('https://api.github.com/users/'+searchName)
			.then(function(response) {
				defer.resolve(response.data);
			}
			.bind(this),
			function(response){
				defer.reject({error:response.data, status:response.status});
			});
			
		//sending back the promise
		return defer.promise;
	};
	
});

//barse megha, jhan jhan karke
//tu aaye jab sawan banke, mere piya mere piya mere piyaaa
//teri mohabbat me bhiga rahun
//nachun me aaye jab jab tu, mere piya mere piya mere piyaa

myApp.controller('MainController', ['AppModel', function(AppModel) {
	
	var vm = this;
	
	vm.users = [];
	
	vm.getUser = function(searchName) {
		AppModel.getUser(searchName).then(
			function(data) {
				vm.users.push(data);
			}	
		);
	};
	
}]);
	