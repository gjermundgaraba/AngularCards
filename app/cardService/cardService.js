(function() {
    'use strict';

    angular
        .module('app.cardService')
        .factory('CardService', CardServiceFactory);

    CardServiceFactory.$inject = ['$resource', '$q'];

    function CardServiceFactory($resource, $q) {
        var service = {
            getAllCards: getAllCards,
            postCard: postCard,
            deleteCard: deleteCard
        };

        return service;

        function getAllCards() {
            return getResourcePromise($resource('/cards').query());
        }

        function postCard(card) {
            return getResourcePromise($resource('/cards').save(card));
        }

        function deleteCard(card) {
            return getResourcePromise($resource('/cards/:id').delete({ id: card._id }));
        }

        function getResourcePromise(resource) {
            var deferred = $q.defer();

            resource
                .$promise
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
})();