
angular.module('cardService-module', [])
    .factory('CardService', function CardServiceFactory($http) {
        return {
            all: function() {
                return $http.get('/cards');
            },
            postCard: function(card) {
                return $http.post('/cards', card);
            }
        }
    });