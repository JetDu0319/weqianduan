define(['app'],function(app){
    app.register
    .controller('MainCtrl', function($scope,$ocLazyLoad){
        $scope.str = 'main page';
		/*$ocLazyLoad.load('js/controllers/navCtrl',{cache: false, timeout: 5000}).then(function () {
			$scope.navContainer = 'pages/navbar.html';
		});*/
    });
})