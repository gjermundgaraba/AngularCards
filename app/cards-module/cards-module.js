
angular.module('cards-module', [])
.controller('CardsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.cards = [];
    $http.get('cards-module/cards_data.json').success(function(data) {
        $scope.cards = data;
    });

    $rootScope.$on('newCardEvent', function(event, data) {
       $scope.cards.unshift(data);
    });
}])
.directive('cardsContainer', function() {
    return {
        restrict: 'E',
        templateUrl: 'cards-module/cards-container.html',
        controller: 'CardsController'
    };
});