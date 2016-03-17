
var app = angular.module('weApp',['oc.lazyLoad','ui.router']);
/*oclazyload配置*/
app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
		loadedModules: ['app'], //主模块名,和ng.bootstrap(document, [‘monitorApp‘])相同
		jsLoader: requirejs, //使用requirejs去加载文件
		// files: ['js/controllers/navCtrl'], //主模块需要的资源，这里主要子模块的声明文件
		modules: [
			{
			    name: 'navCtrl',	//导航条
			    files: ['js/directives/navDirec.js','js/controllers/navCtrl.js?time='+new Date().getTime()]
		    }
		],
		// debug: true
	});
}]);
app.controller('MainCtrl',['$scope','$ocLazyLoad',function($scope,$ocLazyLoad){
	$ocLazyLoad.load('navCtrl',{cache: false, timeout: 5000}).then(function () {
		$scope.navContainer = 'pages/navbar.html';
	});
}]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	var lazyDeferred;
	function resovleDep(param, tpl, module) {
		var resolves = {
			loadMyCtrl: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad, $templateCache, $q) {
				lazyDeferred = $q.defer();
				return $ocLazyLoad.load({
					name: module,
					cache: false,
					files: param.files
				}).then(function() {
					lazyDeferred.resolve($templateCache.get(tpl));
				});
			}]
		};
		return resolves;
	};

	$urlRouterProvider.otherwise('/index');
	//路由配置
	$stateProvider
		.state('aboutme', {
			url: '/aboutme',
			templateProvider: function() {
				return lazyDeferred.promise;
			},
			controller: 'mainCtrl',
			resolve: resovleDep({
				files: [
					'controllers/module1Ctrl',
					'services/module1Service',
					'directives/module1Directive'
				]
			}, 'pages/aboutme.html', 'app.module1')
		})
		.state('module2', {
			abstract: true,
			url: '/module2',
			templateUrl: 'views/module2.html'
		})
		.state('module2.list', {
			url: '',
			templateProvider: function() {
				return lazyDeferred.promise;
			},
			controller: 'module2Controller',
			resolve: resovleDep({
				files: [
					'controllers/module2ListCtrl',
					'services/module2Service'
				]
			}, 'views/list.html', 'app.module1')
		})
		.state('module2.detail', {
			url: ' /:id',
			templateProvider: function() {
				return lazyDeferred.promise;
			},
			controller: 'detailController',
			resolve: resovleDep({
				files: ['controllers / detailCtrl', 'services / detailService']
			}, 'views / detail.html', 'app.module2')
		});
}]);

