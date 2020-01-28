"use strict";

//when we use custom directives, we can set any arbitrary attributes to those elements as we see fit. 
//from our directives we can then observe those attirbutes and take action when values change.
var myApp = angular.module('myApp', []);


myApp.directive('tstThermometer', function() {
	return {
		scope: {
			temperature: '@'
		},
		//templateUrl:'../templates/thermometer.html',
		template: 'Current Temperature is {{ temperature }}',
		link: function(scope, element, attrs) {
			attrs.$observe('temperature', function(newValue) {
				var temp = attrs.temperature;
				if(temp<45) {
					element.addClass('freezing');
					element.removeClass('normal');
					element.removeClass('hot');
				} else if(temp>=45 && temp<=85) {
					element.removeClass('freezing');
					element.addClass('normal');
					element.removeClass('hot');
				} else {
					element.removeClass('freezing');
					element.removeClass('normal');
					element.addClass('hot');					
				}
			});
		}
	};
});

myApp.controller('MainController', [function(){
	this.currentTemperature = 78;
}]);