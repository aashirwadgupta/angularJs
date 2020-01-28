describe('TransformFilter', function() {
	
	var mockTransformService;
	var transformFilter;
	
	beforeEach(module('myApp'));
	
	//angular will append word filter when creating a custom filter ex dashes to dashesFilter
	beforeEach(function() {
		mockTransformService = jasmine.createSpyObj('mySpy', ['transform']);
		mockTransformService.transform.and.returnValue('transformed value');
		
		module(function($provide) {
			$provide.value('TransformService', mockTransformService);
		});
	});
	
	it('should replace spaces with dashes', function() {
		inject {
			function(transformFilter) {
				expect(dashesFilter('This is a Test')).toEqual('transformed value');				
			}
		}
	});
	
	it('should capitalize each word', function() {
		inject {
			function(transformFilter) {
				expect(dashesFilter('This is a Test')).toEqual('transformed value');				
			}
		}
	});
	
});