(function() {
    'use strict';

    angular.module('app.addCard')
        .controller('AddCardController', function ($scope, $modalInstance, $rootScope) {

            $scope.newCard = { title: '', body: ''};

            $scope.ok = function () {
                $scope.newCard.createdAt = +new Date();
                $rootScope.$broadcast('newCardEvent', $scope.newCard);
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        });
})();
