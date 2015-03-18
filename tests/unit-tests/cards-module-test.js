'use strict';

describe('cards-module', function() {

    beforeEach(module('app.cards'));

    describe('Cards-module controller', function(){

        var rootScope, ctrl, cardServiceMock;

        beforeEach(inject(function($rootScope, $controller) {
            rootScope = $rootScope.$new();

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
                }
            };

            ctrl = $controller('CardsController', {$rootScope: rootScope, CardService: cardServiceMock});
        }));

        it('should have 2  cards', function() {
            expect(ctrl.cards.length).toBe(2);
        });

        it('should refresh on newCardEvent', function() {
            spyOn(ctrl, 'fetchAllCards');
            rootScope.$broadcast('newCardEvent', {"title": "Test", "body" : "Test"});
            expect(ctrl.fetchAllCards).toHaveBeenCalled();
        });

    });
});