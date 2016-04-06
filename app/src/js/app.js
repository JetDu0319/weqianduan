define(['uiRouter'],function(){
	var app = angular.module("weApp", ['oc.lazyLoad','ui.router']);
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){        
	    app.register = {
	        //得到$controllerProvider的引用
	        controller : $controllerProvider.register,
	        //同样的，这里也可以保存directive／filter／service的引用
	        directive: $compileProvider.directive,
	        filter: $compileProvider.register,
	        service: $provide.service
	    }; 
	});
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	    $urlRouterProvider.otherwise('home');
	    $stateProvider
	    .state("home",{
	        url:"/home",
	        controller: 'MainCtrl',
	        templateUrl: 'pages/main.html',
	        resolve: {
	            loadCtrl: ["$q", function($q) { 
	                var deferred = $q.defer();
	                //异步加载controller／directive/filter/service
	                require([
	                    'js/directives/navDirec',
	                    'js/controllers/mainCtrl'
	                ], function() { deferred.resolve(); });
	                return deferred.promise;
	            }]
	        }
	    })
	    .state("aboutme",{
	        url:"/aboutme",
	        controller: 'AboutCtrl',
	        templateUrl: 'pages/aboutme.html',
	        resolve: {
	            loadCtrl: ["$q", function($q) { 
	                var deferred = $q.defer();
	                //异步加载controller／directive/filter/service
	                require([
	                    'js/controllers/aboutCtrl'
	                ], function() { deferred.resolve(); });
	                return deferred.promise;
	            }]
	        }
	    })
	}]);
    app.controller('MainCtrl',['$scope','$ocLazyLoad',function($scope,$ocLazyLoad){
    	/*加载header和footer*/
		$ocLazyLoad.load('js/controllers/navCtrl',{cache: false, timeout: 5000}).then(function () {
			$scope.navContainer = 'pages/navbar.html';
			$scope.footerContainer = 'pages/footer.html';
		});
	}]);
　　return app;
});
/*调戏看客*/
document.addEventListener('visibilitychange', function() {
  document.title = document.hidden ? '出BUG了，快看！':'微前端';
});