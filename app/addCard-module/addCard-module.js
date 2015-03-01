angular.module('addCard-module', [])
    .controller('AddCardController', function ($scope, $modalInstance, $rootScope) {

        $scope.title = '';
        $scope.body = '';

        $scope.ok = function () {
            $rootScope.$broadcast('newCardEvent', { title: $scope.title, body: $scope.body});
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });