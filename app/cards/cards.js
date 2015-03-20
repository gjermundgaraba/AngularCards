(function() {
    'use strict';

    angular.module('app.cards')
        .controller('CardsController', CardsController)
        .directive('cardsContainer', cardsContainerDirective);

    CardsController.$inject = ['$rootScope', 'CardService', '$modal'];

    function CardsController($rootScope, CardService, $modal) {
        var controller = this;

        controller.cards = [];
        controller.deleteCard = deleteCard;
        controller.fetchAllCards = fetchAllCards;
        controller.view = view;

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

        function view(card) {
            $modal.open({
                templateUrl: '../viewCard/viewCardModal.html',
                controller: 'ViewCardController',
                resolve: {
                    card: function() {
                        return card;
                    }
                },
                controllerAs: 'ViewCardCtrl',
                size: 'sm'
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