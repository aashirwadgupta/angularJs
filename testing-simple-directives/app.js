"use strict";

var myApp = angular.module('myApp', []);

/*myApp.directive('tstSimpleDirective', function() {
	return {
		restrict:'E',
		replace:true,
		template:'<p>My Simple Directive</p>'
	};
}]);
*/

//For testing external directives	
/*
myApp.directive('tstExternalDirective', function() {	
	return {
		restrict:'E',
		replace:true,
		template:'../templates/template.html'
	};
	
}]);
*/

//To test data binding in custom directive
/*
myApp.directive('tstSimpleDirective', function() {
	return {
		restrict:'E',
		replace:true,
		template:'../templates/template.html',
		scope: {
			person: '='
		},
		// makes anything in the scope, bind to controllerAs
		bindToController: true,
		controller: function() {
			
		}, controllerAs: 'vm'
		
	};
}]);
*/

//To test event binding in custom directive
myApp.directive('tstSimpleDirective', function() {
	return {
		restrict:'E',
		replace:true,
		template:'../templates/template.html',
		scope: {
			isActivated:'='
		},
		// makes anything in the scope, bind to controllerAs
		bindToController: true,
		controller: function() {
			this.toggleActivated = function() {
				this.isActivated = !this.isActivated;
			};
		}, controllerAs: 'vm'
		
	};
}]);