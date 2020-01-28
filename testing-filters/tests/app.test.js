describe('DashesFilter', function() {
	
	var dashesFilter;
	
	beforeEach(module('myApp'));
	
	//angular will append word filter when creating a custom filter ex dashes to dashesFilter
	beforeEach(inject(function(_dashesFilter_) {
		dashesFilter = _dashesFilter_;
	}));
	
	it('should replace spaces with dashes', function() {
		expect(dashesFilter('This is a Test')).toEqual('This-is-a-Test');
	});
	
});