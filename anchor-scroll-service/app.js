"use strict";

//

var myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$location', '$anchorScroll', function($location, $anchorScroll){
	this.jumpToTop = function() {
		$location.hash('topLink');
		$anchorScroll();
	};
	
	this.jumpToBottom = function() {
		$location.hash('bottomLink');
		$anchorScroll();
	};
}]);
