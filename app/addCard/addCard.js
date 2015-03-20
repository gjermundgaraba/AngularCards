(function() {
    'use strict';

    angular.module('app.addCard')
        .controller('AddCardController', AddCardController);

    AddCardController.$inject = ['$modalInstance', '$rootScope', 'CardService'];

    function AddCardController($modalInstance, $rootScope, CardService) {
        var vm = this;
        vm.newCard = { title: '', body: ''};
        vm.ok = ok;
        vm.cancel = cancel;

        function ok() {
            vm.newCard.createdAt = +new Date();
            CardService.postCard(vm.newCard).success(function () {
                $rootScope.$broadcast('newCardEvent', vm.newCard);
            });
            $modalInstance.close();
        }

        function cancel() {
            $modalInstance.dismiss();
        }
    }
})();
