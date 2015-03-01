angular.module('cardService-module', [])
    .factory('CardService', function CardServiceFactory($http) {
        return {
            all: function() {
                return $http({method: 'GET', url: 'cards-module/cards_data.json'});
            }
        }
    });