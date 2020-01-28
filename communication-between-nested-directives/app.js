"use strict";

//when we have a custom directive setup with a controller for exposing some API to other directives, by default, those other directives
//must be applied as attributes to the same element in order for the controller to be accessible to them. 

var myApp = angular.module('myApp', []);

//main directive
myApp.directive('tstSchoolView', function() {
	return {
		templateUrl:'templates/school.html',
		restrict:'E',
		transclude=true,
		controller: function($scope) {
			$scope.students =[];
			
			this.register = function(name, studentNumber) {
				$scope.students.push({name:name, studentNumber:studentNumber});
			}
		}
	};
});

//inside the tstSchoolView
myApp.directive('tstStudent', function() {
	return {
		restrict: 'E',
		//tells angular to find the directive and attach to element chain
		require: '^tstSchoolView',
		templateUrl: 'templates/student.html',
		scope: {
			name:'@',
			studentNumber:'@'
		},
		link:function(scope, element, attrs, schoolController) {
			schoolController.register(scope.name, scope.studentNumber);
		}
	};
});

myApp.controller('MainController', [function(){

}]);