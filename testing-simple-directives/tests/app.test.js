/*describe('SimpleDirective', function() {
	//myElement will be used to hold the direcitves element when we render the DOM
	var myElement;
	
	beforeEach(module('myApp'));
	
	//compile service helps to compile the directive into the DOM
	beforeEach(inject(function($compile) {
		
		//create new element in angular using angular.element
		myElement = angular.element('<tst-simple-directive></tst-simple-directive>');
		$compile(myElement);
		
	}));
	
	it('should create the DOM node with Template text correctly rendered', function() {
		expect(myElement.text()).toContain('My Simple Directive');
	});
	
});
*/

//Testing External Templates and custom directives

/*For this to work, we need to change something in karma.config.js because this requires an external template file

npm install karma-ng-html2js-preprocessor -g
this compile html to js for us before running the test
now in karma.config.js in the files section inclue one more entry 'src/templates/*.html'
now in the preprocessors section 'src/templates/*.html':['ng-html2js']
now tell preprocessor to ignore the first src part
ngHtml2JsPreprocessor: { stripPrefix:'src'}
*/
/*
describe('CustomDirective', function() {
	//myElement will be used to hold the direcitves element when we render the DOM
	var myElement;
	
	beforeEach(module('myApp'));
	
	beforeEach(module('../templates/template.html'));
	
	//create the custom directive, assign it to variable, compile it, test it, and digest it
	beforeEach(inject(function($compile, $rootScope) {
		
		//create new element in angular using angular.element
		myElement = angular.element('<tst-external-directive></tst-external-directive>');
		$compile(myElement)($rootScope);
		$rootScope.$digest();
	}));
	
	it('should create the DOM node with External Template\'s content text correctly rendered', function() {
		expect(myElement.text()).toContain('My External Template Directive');
	});
	
});
*/

//Test for the directives using dataBinding
/*
describe('SimpleDirective', function() {
	//myElement will be used to hold the direcitves element when we render the DOM
	var myElement;
	
	beforeEach(module('myApp'));
	beforeEach(module('../templates/template.html'));
	
	
	beforeEach(inject(function($compile, $rootScope) {
		
		//create new element in angular using angular.element
		myElement = angular.element('<tst-external-directive person="person"></tst-external-directive>');
		$rootScope.person = { firstName:'Aashirwad', lastName: 'Gupta' };
		$compile(myElement)($rootScope);
		$rootScope.$digest();
	}));
	
	it('should create the DOM node with Template text correctly rendered', function() {
		expect(myElement.text()).toContain('Hello Aashirwad Gupta.');
	});
	
});
*/

//Test for the directives using event Binding
describe('SimpleDirective', function() {
	//myElement will be used to hold the direcitves element when we render the DOM
	var myElement;
	
	beforeEach(module('myApp'));
	beforeEach(module('../templates/template.html'));
	
	
	beforeEach(inject(function($compile, $rootScope) {
		
		//create new element in angular using angular.element
		myElement = angular.element('<tst-simple-directive is-activated="false"></tst-simple-directive>');
		$compile(myElement)($rootScope);
		$rootScope.$digest();
	}));
	
	it('should toggle to activate', function() {
		var button = myElement.find('button')[0];
		button.click();
		expect(myElement.text()).toContain('This directive is activated: true');
	});
	
});