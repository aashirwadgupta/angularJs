"use strict";


//log services helps us to write console messages within the context of our angular application and wraps the console.log service
var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$log', function($log){
	
	this.logClicked = function(data) {
		$log.log(data);
	};
	
	//there are 4 other options to use logService to log the data
	
	this.infoClicked = function(data) {
		$log.info(data);
	};
	
	this.warnClicked = function(data) {
		$log.warn(data);
	};
	
	this.errorClicked = function(data) {
		$log.error(data);
	};
	
	this.debugClicked = function(data) {
		$log.debug(data);
	};
}]);