(function() {
    'use strict';

    angular.module('app.cards')
        .controller('CardsController', CardsController)
        .directive('cardsContainer', cardsContainerDirective);

    CardsController.$inject = ['$rootScope', 'CardService'];

    function CardsController($rootScope, CardService) {
        var controller = this;

        controller.cards = [];
        controller.deleteCard = deleteCard;
        controller.fetchAllCards = fetchAllCards;

        $rootScope.$on('newCardEvent', function () {
            controller.fetchAllCards();
        });

        controller.fetchAllCards();

        function fetchAllCards() {
            CardService.all().success(function (data) {
                controller.cards = data;
            });
        }

        function deleteCard(card) {
            CardService.deleteCard(card).success(function () {
                controller.fetchAllCards();
            });
        }
    }

    function cardsContainerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'cards/cards-container.html'
        };
    }
})();