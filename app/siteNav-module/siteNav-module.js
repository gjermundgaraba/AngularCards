
angular.module('siteNav-module', ['addCard-module'])
    .controller('SiteNavController', function($scope, $modal) {
        $scope.open = function () {

            $modal.open({
                templateUrl: 'addCard-module/addCardModal.html',
                controller: 'AddCardController',
                size: 'sm'
            });
        };
    })
    .directive('siteNav', function() {
        return {
            restrict: 'E',
            templateUrl: 'siteNav-module/site-nav.html',
            controller: 'SiteNavController'
        };
    });