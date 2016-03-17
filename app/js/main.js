/**
 * Created by wangmingdong on 2016/3/16.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery': 'lib/jquery/jquery-2.1.1',
        'bootstrap':'lib/bootstrap/js/bootstrap',
        'angular': 'lib/angular/angular',
        'ocLazyLoad': 'lib/ocLazyLoad/ocLazyLoad.require',
        'uiRouter':'lib/ui-router/ui-router',
        'app': 'js/app'
    },
    shim: {
        'bootstrap':['jquery'],
        'angular': ['jquery'],
        'ocLazyLoad': ['angular'],
        'uiRouter':['angular'],
        'app': ['ocLazyLoad','bootstrap','uiRouter']
    }
});

// Start the main app logic.
requirejs(['app'], function() {
    angular.bootstrap(document.body, ['weApp']);
});

