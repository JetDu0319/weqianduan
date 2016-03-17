
var app = angular.module('weApp',['oc.lazyLoad','ui.router']);
app.controller('MainCtrl',['$scope','$ocLazyLoad',function($scope,$ocLazyLoad){
	console.log('main')
	$ocLazyLoad.load('js/controllers/navCtrl').then(function () {
		alert()
		$scope.navContainer = 'pages/navbar.html';
	});
}]);
