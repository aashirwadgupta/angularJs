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
	
	this.getUsersAtOnce = function(users) {
		
		var promises = [];
		users.forEach(function(users) {
			var promise = this.getUser(users);
			promises.push(promise);
		}.bind(this));
		
		return $q.all(promises);
	};
	
	//we have a synchronus call with a custom service and then we will convert it into asynchronus service by mocking up a backend server call using timeout
	var usersSync = [
	{name:'Aashirwad Gupta', id:432401},
	{name:'Suraj Acharya', id:519253},
	{name:'Shailesh Dayananda', id:295882}
	];
	
	this.getUsersSync = function() {
		return usersSync;
	};
	
	//bad call, won't work at once
	var usersAsync = [
		{name:'RPData Aashirwad Gupta', id:432401},
		{name:'RPData Suraj Acharya', id:519253},
		{name:'RPData Shailesh Dayananda', id:295882}
	];
	
	//returns after 3 seconds
	this.getUsersAsyncBad = function() {
		//it doesn't matter that timeout function returns something, it's the getUsersAsyncBad method which has to return that's why it won't work in the case below 
		
		$timeout(function() {
			return usersAsync;
		}, 3000);
		
		
		//We will use q service to fix this. so we create a similar method and return the values
	};
	
	this.getUsersAsync = function(success) {
		var deferred = $q.defer();
		
		$timeout(function() {
			if(success) {
				deferred.resolve(usersAsync);
			} else {
				deferred.reject(new Error('Some error occurred!'));
			}
		}, 3000);
		
		return deferred.promise;
	};
});

//barse megha, jhan jhan karke
//tu aaye jab sawan banke, mere piya mere piya mere piyaaa
//teri mohabbat me bhiga rahun
//nachun me aaye jab jab tu, mere piya mere piya mere piyaa

myApp.controller('MainController', ['AppModel', function(AppModel) {
	
	var vm = this;
	
	vm.model = AppModel;
	
	vm.users = [];
	
	vm.getUser = function(searchName) {
		vm.model.getUser(searchName).then(
			function(data) {
				vm.users.push(data);
			}	
		);
	};
	
	vm.getSomeUsers = function() {
		vm.getUser('davideast');
		vm.getUser('putin');
		vm.getUser('jones');
	};
	
	vm.getUsersAtOnce = function() {
		vm.model.getUsersAtOnce(['aashirwadgupta','john','mperry']).then(
			function(results) {
				vm.users = vm.users.concat(results);
			}
		);
	};
	
	//using the asynchronus call of q service. When invoked fires the method in the service
	vm.getUsersSync = function() {
		vm.users = vm.model.getUsersSync();
	};
	vm.getUsersAsyncBad = function() {
		vm.users = vm.model.getUsersAsyncBad();
	};
	
	vm.getUsersAsync = function(success) {
		//got the then syntax as it is returning the promise
		vm.model.getUsersAsync(success).then(
			function(result) {
				vm.users = result;
			},
			function(error) {
				console.log(error);
			}
		);
	};
	
}]);
	