'use strict';

describe('cards-module', function() {

    beforeEach(module('app.cards'));

    describe('Cards-module controller', function(){

        var scope, rootScope, ctrl, cardServiceMock;

        beforeEach(inject(function($rootScope, $controller) {
            rootScope = $rootScope.$new();
            scope = $rootScope.$new();

            var cards = [
                {
                    "title": "This is a title",
                    "body": "This is a body"
                },
                {
                    "title": "This some other title",
                    "body": "This is a body or something Yes Yes Yes Yes Yes"
                }
            ];

            cardServiceMock = {
                all: function () {
                    return {
                        success: function(func) {
                            func(cards);
                        }
                    };
                },
                postCard: function(card) {
                    cards.push(card);
                    return {
                        success: function(func) {
                            func();
                        }
                    };
                }
            };

            ctrl = $controller('CardsController', {$scope: scope, $rootScope: rootScope, CardService: cardServiceMock});
        }));

        it('should have 2  cards', function() {
            expect(scope.cards.length).toBe(2);
        });

        it('should add card on newCardEvent', function() {
            expect(scope.cards.length).toBe(2);
            rootScope.$broadcast('newCardEvent', {"title": "Test", "body" : "Test"});
            expect(scope.cards.length).toBe(3);
        });

    });
});