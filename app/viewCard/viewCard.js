(function() {
    'use strict';

    angular.module('app.viewCard')
        .controller('ViewCardController', ViewCardController);

    ViewCardController.$inject = ['$modalInstance', 'card'];

    function ViewCardController($modalInstance, card) {
        this.card = card;
        this.ok = ok;

        function ok() {
            $modalInstance.dismiss();
        }
    }
})();
