"use strict";

//timeout service returns a promise object that gets resolved in the specified time. in addition we can use that promise object to cancel the timeout //service. The timeout service are wrapper for setTimeout in the browser.

var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$timeout', function($timeout){
	//view model
	var vm = this;
	
	var timeoutPromise = null;
	vm.message = "No timeout scheduled.";
	vm.delay = 2000;
	
	vm.startTimeout = function() {
		vm.message = '';
		vm.cancelTimeout();
		vm.message += 'Starting a new timeout...';
		
		timeoutPromise = $timeout(function(data) {
			vm.message = 'Timeout complete.';
			timeoutPromise = null;
		}, vm.delay, true, {data:'testing123'});
	};
	
	vm.cancelTimeout = function() {
		if(timeoutPromise) {
			$timeout.cancel(timeoutPromise);
			timeoutPromise = null;
			vm.message = 'Previous timeout was cancelled.';
		}
	};
}]);
