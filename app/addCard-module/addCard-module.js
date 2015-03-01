angular.module('addCard-module', [])
    .controller('AddCardController', function ($scope, $modalInstance, $rootScope) {

        $scope.newCard = { title: '', body: ''};

        $scope.ok = function () {
            $rootScope.$broadcast('newCardEvent', $scope.newCard);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });