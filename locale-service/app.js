"use strict";

//

var myApp = angular.module('myApp', []);


myApp.controller('MainController', ['$locale', function($locale){
	this.date = new Date();
	this.cost = 3232.56;
	this.message = 'I am going to school';
	this.formattedDate = $locale.DATETIME_FORMATS.fullDate;
}]);
