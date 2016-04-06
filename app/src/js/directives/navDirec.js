define(['app'],function(app){
    app.register
    .directive('slideBtn', function(){
        return {
			restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			template: '',
			replace: false,
			link: function($scope, elem, attrs, controller) {
				console.log(elem)
				elem.bind('click',function(){
					console.log(this)
				});
			}
		};
    });
})