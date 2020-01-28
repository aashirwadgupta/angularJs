"use strict";

describe('TestMainController', function() {
	
	var CalculatorService;
	beforeEach(module("myApp"));
	
	beforeEach(inject(function( _$CalculatorService_) {
		CalculatorService = _$CalculatorService_;
	}));
	
	it('should add 3 and 2 and get 5', function() {
		expect(CalculatorService.add(3,2)).toEqual(5);
	});
	
	it('should subtract 3 and 2 and get 1', function() {
		expect(CalculatorService.subtract(3,2)).toEqual(1);
	});
	
	it('should divide 3 and 2 and get 1.5', function() {
		expect(CalculatorService.divide(3,2)).toEqual(1.5);
	});
	
	it('should multiply 3 and 2 and get 6', function() {
		expect(CalculatorService.multiply(3,2)).toEqual(6);
	});
});