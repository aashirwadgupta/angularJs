"use strict";

var myApp = angular.module('myApp',[]);

//attach and invoke external scope function from within our isolated scope functions
myApp.directive('tstGenerateNumbers', function() {
	return {
		scope: {
			//'&' is binding for a function
			//'?' means optional value
			generatorFunction: '&',
			onSave: '&',
			count: '=?'
		},
		templateUrl: 'templates/number-gen.html',
		restrict:'E',
		//we will create controller of directive as well
		controller: function($scope) {
			if($scope.generatorFunction) {
				$scope.items = $scope.generatorFunction({count:$scope.count});
			}
			
			$scope._onSave = function() {
				if($scope.onSave){
					$scope.onSave();
				}
			};
		}
	};
});
myApp.controller('MainController', ['$scope', function($scope){
	this.randomNumbers = function(count) {
		var results =[];
		count = count || 10;
		for (var counter=0; counter<count; counter++) {
			var item = Math.round(Math.random()*1000)+1;
			results.push(item);
		}
		return results;
	};
	
	this.sequentialNumbers = function(count) {
		var results =[];
		count = count || 10;
		for (var counter=1; counter<=count; counter++) {
			results.push(counter);
		}
		return results;
	};
	
	this.saveFirst = function() {
		alert('The first item is saved!');
	};
	
	this.saveSecond = function() {
		alert('The second item is saved!');
	};
}]);