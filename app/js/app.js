
var app = angular.module('weApp',[]);
console.log(app)
app.controller('MainCtrl',['$scope',function($scope){
	console.log('main')
	$scope.navContainer = 'pages/navbar.html';
}]);

/*var app = angular.module('weApp',['oc.lazyLoad','ui.router']);
app.controller('MainCtrl',['$scope','$ocLazyLoad',function($scope,$ocLazyLoad){
	console.log('main')
	$scope.navContainer = 'pages/navbar.html';
}]);
*/