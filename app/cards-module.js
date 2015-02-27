
angular.module('cards-module', [])
.controller('CardsController', ['$scope', function($scope) {
    $scope.cards = [
        {
            title: 'This is a title',
            body: 'This is a body'
        },
        {
            title: 'This some other title',
            body: 'This is a body or something'
        },
        {
            title: 'This is a title',
            body: 'This is a body'
        },
        {
            title: 'Title',
            body: 'Body'
        }
    ]
}])
.directive('cardsContainer', function() {
    return {
        restrict: 'E',
        templateUrl: 'cards-container.html',
        controller: 'CardsController'
    };
});