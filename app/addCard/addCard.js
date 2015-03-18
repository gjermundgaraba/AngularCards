(function() {
    'use strict';

    angular.module('app.addCard')
        .controller('AddCardController', AddCardController);

    AddCardController.$inject = ['$scope', '$modalInstance', '$rootScope', 'CardService'];

    function AddCardController($scope, $modalInstance, $rootScope, CardService) {
        $scope.newCard = { title: '', body: ''};
        $scope.ok = ok;
        $scope.cancel = cancel;

        function ok() {
            $scope.newCard.createdAt = +new Date();
            CardService.postCard($scope.newCard).success(function () {
                $rootScope.$broadcast('newCardEvent', $scope.newCard);
            });
            $modalInstance.close();
        }

        function cancel() {
            $modalInstance.dismiss();
        }
    }
})();
