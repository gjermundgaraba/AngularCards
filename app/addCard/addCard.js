(function() {
    'use strict';

    angular.module('app.addCard')
        .controller('AddCardController', function ($scope, $modalInstance, $rootScope, CardService) {

            $scope.newCard = { title: '', body: ''};

            $scope.ok = function () {
                $scope.newCard.createdAt = +new Date();
                CardService.postCard($scope.newCard).success(function () {
                    $rootScope.$broadcast('newCardEvent', $scope.newCard);
                });
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        });
})();
