(function() {
    'use strict';

    angular
        .module('app.cardService')
        .factory('CardService', CardServiceFactory);

    CardServiceFactory.$inject = ['$http'];

    function CardServiceFactory($http) {
        var service = {
            all: all,
            postCard: postCard,
            deleteCard: deleteCard
        };

        return service;

        function all() {
            return $http.get('/cards');
        }

        function postCard(card) {
            return $http.post('/cards', card);
        }

        function deleteCard(card) {
            return $http.delete('/cards/' + card._id);
        }

    }
})();