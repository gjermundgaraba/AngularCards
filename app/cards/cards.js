(function() {
    'use strict';

    angular.module('app.cards')
        .controller('CardsController', function ($scope, $rootScope, CardService) {
            $scope.cards = [];
            var controller = this;
            controller.fetchAllCards = function () {
                CardService.all().success(function (data) {
                    $scope.cards = data;
                });
            };

            $scope.deleteCard = function (card) {
                CardService.deleteCard(card).success(function () {
                    controller.fetchAllCards();
                });
            };

            $rootScope.$on('newCardEvent', function (event, data) {
                CardService.postCard(data).success(function () {
                    controller.fetchAllCards();
                });
            });

            controller.fetchAllCards()
        })
        .directive('cardsContainer', function () {
            return {
                restrict: 'E',
                templateUrl: 'cards/cards-container.html',
                controller: 'CardsController'
            };
        });
})();