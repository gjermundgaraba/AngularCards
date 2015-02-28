
angular.module('cards-module', [])
.controller('CardsController', ['$scope', '$http', function($scope, $http) {
    $scope.cards = [];
    $http.get('cards-module/cards_data.json').success(function(data) {
        $scope.cards = data;
    })

}])
.directive('cardsContainer', function() {
    return {
        restrict: 'E',
        templateUrl: 'cards-module/cards-container.html',
        controller: 'CardsController'
    };
});