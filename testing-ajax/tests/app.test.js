describe('AppModel', function() {
	var $httpBackend;
	var AppModel;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		AppModel = $injector.get('AppModel');
	}));
	
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	it('should make an $http request getting states', function() {
		
		$httpBackend.expectGET('https://api.github.com/users/aashirwadgupta').respond([{name:'Aashirwad Gupta', location:'Mangalore', email:'aash.gupta2@gmail.com'}]);
		AppModel.getUser().then(
			function(data){
				expect(data).toEqual([{name:'Aashirwad Gupta', location:'Mangalore', email:'aash.gupta2@gmail.com'}]);
			}
		);
		$httpBackend.flush();
		
	});
	
});