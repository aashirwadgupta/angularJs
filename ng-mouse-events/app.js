"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller('MainController', [function() {
	this.mouseDownCount=0;	
	this.mouseUpCount=0;	
	this.mouseMoveCount=0;	
	this.mouseOverCount=0;	
	this.mouseEnterCount=0;	
	this.mouseLeaveCount=0;	
	this.mouseX=0;	
	this.mouseY=0;	
	
	this.doMouseDown = function() {
		this.mouseDownCount++;
	};
	
	this.doMouseUp = function() {
		this.mouseUpCount++;
	};
	
	this.doMouseMove = function() {
		this.mouseMoveCount++;
		this.mouseX = event.offsetX;
		this.mouseY = event.offsetY;
	};
	
	this.doMouseEnter = function() {
		this.mouseEnterCount++;
	};
	
	this.doMouseLeave = function() {
		this.mouseLeaveCount++;
	};
	
	this.doMouseOver = function() {
		this.mouseOverCount++;
	};
}]);