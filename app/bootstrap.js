window.onload = function(){

	/*
	 *ENTIRE BOOTSTRAPPING PROCESS 
	 *ends at 10:25
	 */
	var $rootElement = angular.element(window.document) //this is location of ng-app 
	var modules = [
		'ng', // has all the built-in directives and magic
		'myApp', // this is just the module
		function($provide){ // tells module system where rootElement is, only one
			$provide.value('$rootElement', $rootElement)
		}
	];
	// everything is depedency injected this is no different
	// only need one injector if you need more you are doing something wrong	
	var $injector = angular.injector(modules);

	// $compile service traverses DOM starting at rootElement and looks for directives
	// when looking for directive is called compiled phase, also replaces with a comment from written HTML
	//	and internally compiles the new html needed
	var $compile = $injector.get('$compile'); // get $compile service, does all magic
	var compositeLinkFn = $compile($rootElement); //climbs DOM for directives and will replace with comments

	// when linking directives is called link phase
	//  and creates the bindings but does NOT yet reflect in DOM until $apply()
	var $rootScope = $injector.get('$rootScope'); // get a hold of rootScope, there is only one
	compositeLinkFn($rootScope); // runs linking function now we have a view

	// you'll see the view update immediately after this call
	$rootScope.$apply(); // this updates view (hey, angular. GO!)
}
