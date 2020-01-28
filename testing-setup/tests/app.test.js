"use strict";

var TestService;

//to create the config file, go to cmd
//do - karma init karma.config.js
//Which testing framework you want to use?
//jasmine
//Do you want to use Require.js?
//no
//Do you want to capture any browsers automatically?
//Chrome, can put one or more
//What is the location of your source and test files?
///libs/angular.js
//libs/angular-mocks.js
//src/*.js
//tests/*test.js
//Should any of the files included by the previous patterns be excluded?
//
//Do you want Karma to watch all the files and run the tests on change?
//yes
//config file generated karma.config.js

// npm install karma-cli -g
// npm install karma-chrome-launcher -g
// npm install karma-jasmine -g

//to start the test, open the directory in cmd
//karma start karma.config.js

describe('TestService', function() {
	beforeEach(module("myApp"));
	
	//we do the _ append before and after the name they help us to differentiate between params and global args
	
	beforeEach(inject(function( _TestService_) {
		TestService = _TestService_;
	}));
	
	it('should return test data', function() {
		expect(TestService.getData()).toEqual('xyz123');
	});
});