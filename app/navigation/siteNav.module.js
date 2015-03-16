(function() {
    'use strict';
    angular.module('app.siteNav', ['app.addCard'])
        .controller('SiteNavController', function($scope, $modal) {
            $scope.open = function () {

                $modal.open({
                    templateUrl: '../addCard/addCardModal.html',
                    controller: 'AddCardController',
                    size: 'sm'
                });
            };
        })
        .directive('siteNav', function() {
            return {
                restrict: 'E',
                templateUrl: 'navigation/site-nav.html',
                controller: 'SiteNavController'
            };
        });
})();
