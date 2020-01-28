"use strict";
//In AngularJS any content within the tags of a custom directive will be replaced by the contents of that directive's template. 

//in the event , we still need access to the wrapped content we can use transclusion, which allows us to acess the content and scope of any markup //within a custom directive and pull it into our directive

var myApp = angular.module('myApp', []);

myApp.directive('tstUserView', function() {
	return {
		scope: {
			item:'='
		},
		transclude=true,
		templateUrl: 'templates/user.html',
		restrict: 'AE'
	};
});


myApp.controller('MainController', [function(){
	
	this.user = {
		firstName:'Aashirwad',
		lastName: 'Gupta'
	};
	
	//this won't show as it is replaced by tstUserView
	//to show this add transclude=true in directive
	this.helloMessage = 'Hello World!';
}]);