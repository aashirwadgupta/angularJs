"use strict";

//At some point during development we may need to communicate between directives of our angular application. 

var myApp = angular.module('myApp', []);

//One way to this is to create a controller on the directives and exposing it for use on all the other directives
myApp.directive('tstSchoolView', function() {
	return {
		templateUrl: 'templates/school.html',
		restrict: 'E',
		controller: function($scope) {
			
			$scope.courses = [];
			
			this.addCourse = function(courseName) {
				$scope.courses.push(courseName);
				console.log(courseName+' added to the curriculum.');
			}
		}
	};
});

myApp.directive('tstCourseBiology', function() {
	return {
		restrict: 'A',
		require:'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Biology course created.');
			schoolController.addCourse('Biology');
		}
	};
});

myApp.directive('tstCoursePhysics', function() {
	return {
		restrict: 'A',
		require:'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Physics course created.');
			schoolController.addCourse('Physics');
		}
	};
});

myApp.directive('tstCourseChemistry', function() {
	return {
		restrict: 'A',
		require:'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Chemistry course created.');
			schoolController.addCourse('Chemistry');
		}
	};
});

myApp.controller('MainController', [function(){

}]);