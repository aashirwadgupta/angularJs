"use strict";

//Directives can run custom code wirtten when an browser events fire

var myApp = angular.module('myApp', []);


myApp.directive('tstRollover', function() {
	return {
		scope: {
			label: '@'
		},
		templateUrl: '../templates/test-rollover.html',
		replace:true,
		//if we don't tell it to replace true, then directive won't use the div tag which is inside the template, element will not work properly
		link: function(scope, element, attrs) {
			var originalColor = element.css('background-color');
			element.bind('mouseover',function() {
				element.css('background-color', attrs.activeColor);
			});
			element.bind('mouseout', function() {
				element.css('background-color', originalColor);
			});
		}
	};
});

myApp.controller('MainController', [function(){
	
}]);