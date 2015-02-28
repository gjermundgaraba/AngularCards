
angular.module('siteNav-module', [])
.directive('siteNav', function() {
    return {
        restrict: 'E',
        templateUrl: 'siteNav-module/site-nav.html'
    };
});