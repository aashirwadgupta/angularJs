"use strict";

var myApp = angular.module('myApp',[]);
//for linking function directive (attribute) we use shorthand notation for the directive
myApp.directive('tstHotArea', function() {
	return {
		link: function(scope, element, attrs) {
			element.bind('mouseover', function() {
				element.addClass('area-on');
			});
			element.bind('mouseout', function() {
				element.removeClass('area-on');
			});
		}
	};
});
myApp.controller('MainController', ['$scope', function($scope){

}]);