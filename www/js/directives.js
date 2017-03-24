angular.module('app.directives', [])

.directive('actsGive', [function(){
	return {
		restrict: 'A',
		link: function($scope, $element, $attr, sideMenuCtrl) {
			$element.on('click', function () {
				alert('giving!');
			});
		}
	}
}]);