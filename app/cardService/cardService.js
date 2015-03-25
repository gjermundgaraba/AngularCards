(function() {
    'use strict';

    angular
        .module('app.cardService')
        .factory('CardService', CardServiceFactory);

    CardServiceFactory.$inject = ['$http', '$resource', '$q'];

    function CardServiceFactory($http, $resource, $q) {
        var service = {
            getAllCards: getAllCards,
            postCard: postCard,
            deleteCard: deleteCard
        };

        return service;

        function getAllCards() {
            var deferred = $q.defer();
            $resource('/cards').query()
                .$promise
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function postCard(card) {
            return $http.post('/cards', card);
        }

        function deleteCard(card) {
            return $http.delete('/cards/' + card._id);
        }

    }
})();