'use strict'
var aashirwad = angular.module('aashirwad', ["ngRoute"]);
aashirwad.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/profile", {
		templateUrl: "profile.html"
	})
	.when("/resume", {
		templateUrl: "resume.html"
	})
	.when("/blog", {
		templateUrl: "blog.html"
	})
	.when("/social", {
		templateUrl: "social.html"
	});
});

