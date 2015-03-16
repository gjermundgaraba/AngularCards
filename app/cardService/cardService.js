(function() {
    'use strict';

    angular
        .module('app.cardService')
        .factory('CardService', function CardServiceFactory($http) {
            return {
                all: function () {
                    return $http.get('/cards');
                },
                postCard: function (card) {
                    return $http.post('/cards', card);
                },
                deleteCard: function (card) {
                    return $http.delete('/cards/' + card._id);
                }
            }
        });
})();