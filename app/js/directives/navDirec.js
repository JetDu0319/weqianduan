var app = angular.module('mapApp', []);
app.directive('slideBtn', ['$scope', function($scope){
	// Runs during compile
	return {
		restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
		template: '',
		replace: false,
		link: function($scope, elem, attrs, controller) {
			alert()
			elem.bind('click',function(){
				console.log(this)
			});
		}
	};
}]);
