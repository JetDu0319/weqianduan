define(['app'],function(app){
    app.register
    .directive('slideBtn', function(){
        return {
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			template: '',
			replace: false,
			link: function($scope, elem, attrs, controller) {
				elem.bind('click',function(){
					console.log(this)
				});
			}
		};
    });
})