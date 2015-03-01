
angular.module('cards-module', ['cardService-module'])
.controller('CardsController', function($scope, $rootScope, CardService) {
    $scope.cards = [];
    CardService.all().success(function(data) {
        $scope.cards = data;
    });

    $rootScope.$on('newCardEvent', function(event, data) {
       $scope.cards.unshift(data);
    });
})
.directive('cardsContainer', function() {
    return {
        restrict: 'E',
        templateUrl: 'cards-module/cards-container.html',
        controller: 'CardsController'
    };
});