(function() {
    'use strict';

    angular
        .module('app.siteNav')
        .controller('SiteNavController', SiteNavController)
        .directive('siteNav', siteNavDirective);

    SiteNavController.$inject = ['$modal'];

    function SiteNavController($modal) {
        this.open = function () {

            $modal.open({
                templateUrl: '../addCard/addCardModal.html',
                controller: 'AddCardController',
                controllerAs: 'AddCardCtrl',
                size: 'sm'
            });
        };
    }

    function siteNavDirective() {
        return {
            restrict: 'E',
            templateUrl: 'navigation/site-nav.html'
        };
    }
})();
