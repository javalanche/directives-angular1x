/*
 *directive 01 
 */
//myApp.controller('Demo', function($scope){
	//$scope.name = 'world';
	//$scope.leak = 'none';
//});

var Demo = function($scope) {
	$scope.name = 'world';
	$scope.leak = 'none';
};
myApp.controller('Demo', Demo);
