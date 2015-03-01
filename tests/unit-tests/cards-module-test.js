'use strict';

describe('cards-module', function() {

    beforeEach(module('cards-module'));

    describe('Cards-module controller', function(){

        var scope, rootScope, ctrl, httpBackend;

        beforeEach(inject(function($rootScope, $controller, $httpBackend, $http) {
            rootScope = $rootScope.$new();
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when('GET', 'cards-module/cards_data.json').respond(
                [
                    {
                        "title": "This is a title",
                        "body": "This is a body"
                    },
                    {
                        "title": "This some other title",
                        "body": "This is a body or something Yes Yes Yes Yes Yes"
                    }
                ]
            );
            ctrl = $controller('CardsController', {$scope: scope, $rootScope: rootScope, $http: $http});
        }));

        it('should GET cards', function() {
            httpBackend.expectGET('cards-module/cards_data.json');
            httpBackend.flush();
        });

        it('should have 2 cards', function() {
            httpBackend.flush();
            expect(scope.cards.length).toBe(2);
        });

        it('should add card on newCardEvent', function() {
            httpBackend.flush();
            expect(scope.cards.length).toBe(2);
            rootScope.$broadcast('newCardEvent', {"title": "Test", "body" : "Test"});
            expect(scope.cards.length).toBe(3);
        });

    });
});