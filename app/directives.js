'use strict';

myApp.directive('demoGreetTwo', function ($parse) {
	return{
		/*
		 *used until 18:30 
		 */
		compile: function compileFn(cElement, attrs){
			console.log('compileFn(', cElement, attrs, ')');
			cElement.addClass('compiling');
			return function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')', cElement == lElement);
				lElement.text('Hello World');
			}
		}
	}
});
myApp.directive('demoGreetThree', function ($parse) {
	return{
		/*
		 *start at 18:30
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				lElement.text('Hello ' +  scope.name + '!!!');
		}
	}
});
myApp.directive('demoGreetFour', function ($parse) {
	return{
		/*
		 *start at xx:xx
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch('name', function (name) {
					lElement.text('Hello ' +  name + '!!!');
				})
		}
	}
});
myApp.directive('demoGreetFive', function ($parse) {
	return{
		/*
		 *start at xx:xx
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch(attrs.demoGreetFive, function (name) {
					lElement.text('Hello ' +  name + '!!!');
				})
		}
	}
});
myApp.directive('demoGreetSix', function ($parse) {
	return{
		/*
		 *start at 22:00
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch(attrs.demoGreetSix, function (name) {
					lElement.text('Hello ' +  name + '!!!');
				});
				lElement.bind('click', function(){
					console.log('click');
					scope.name = 'abc';
				})
		}
	}
});
myApp.directive('demoGreetSeven', function ($parse) {
	return{
		/*
		 *start at xx:xx
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch(attrs.demoGreetSeven, function (name) {
					lElement.text('Hello ' +  name + '!!!');
				});
				lElement.bind('click', function(){
					console.log('click');
					scope.name = 'abc';
					scope.$apply();
				})
		}
	}
});
myApp.directive('demoGreetEight', function ($parse) {
	return{
		/*
		 *start at xx:xx
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch(attrs.demoGreetEight, function (name) {
					lElement.text('Hello ' +  name + '!!!');
				});
				lElement.bind('click', function(){
					console.log('click');
					scope.$apply(function(){
						scope.name = 'abc';
					});
				})
		}
	}
});
myApp.directive('demoGreetNine', function ($parse) {
	return{
		/*
		 *start at 24:10
		 */
		link: function linkFn(scope, lElement, attrs) {
				console.log('linkingFn(', scope, lElement, attrs, ')');
				scope.$watch(attrs.demoGreetNine, function (name) {
					lElement.text('Hello ' +  name + '!!!');
				});
				lElement.bind('click', function(){
					console.log('click');
					scope.$apply(function(){
						scope.name = 'abc';
					});
				})
		}
	}
});
