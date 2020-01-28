"use strict";

var myApp = angular.module('myApp',[]);
//ngModel allows us to set up two way data binding between input control and underlined data model.
//We can make changes to the model and they will be automatically reflected to the view.
//conversely if we make changes in the view the changes are automatically pushed to the model ensuring that the model and view are in sync

myApp.controller("MainController", [function() {

	this.user = {
		firstName: '',
		lastName:'',
		email:'',
		optIn:false,
		selectedColor:'white'
	};
	
	this.colors = [
		{name:'White', value:'white'},
		{name:'Blue', value:'blue'},
		{name:'Green', value:'green'},
		{name:'Red', value:'red'},
		{name:'Yellow', value:'yellow'},
		{name:'Black', value:'black'},
		{name:'Magenta', value:'magenta'},
		{name:'Gold', value:'gold'},
		{name:'Grey', value:'grey'},
		{name:'Orange', value:'orange'}
	];
		
}]);