window.onload = function(){
	var $rootElement = angular.element(window.document)
	var modules = [
		'ng',
		'myApp',
		function($provide){
			$provide.value('$rootElement', $rootElement)
		}
	];
	var $injector = angular.injector(modules);

	var $compile = $injector.get('$compile');
	var compositeLinkFn = $compile($rootElement); //climbs DOM for directives and will replace with comments

	var $rootScope = $injector.get('$rootScope');
	compositeLinkFn($rootScope); // runs linking function now we have a view

	$rootScope.$apply(); // this updates view
}
