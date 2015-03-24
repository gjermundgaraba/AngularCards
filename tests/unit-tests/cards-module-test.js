'use strict';

describe('Cards-module controller', function(){

    var rootScope, ctrl, cardService;

    beforeEach(module('app.cards'));
    beforeEach(inject(function($rootScope, $controller, CardService) {
        rootScope = $rootScope.$new();
        cardService = CardService;

        var cards = [
            {
                "title": "This is a title",
                "body": "This is a body"
            },
            {
                "title": "This some other title",
                "body": "This is a body or something"
            }
        ];

        spyOn(cardService, 'all').andReturn({
                success: function(func) {
                    func(cards);
                }});

        ctrl = $controller('CardsController', {$rootScope: rootScope, CardService: CardService});
    }));

    it('should have 2 cards', function() {
        expect(ctrl.cards.length).toBe(2);
    });

    it('should refresh on newCardEvent', function() {
        spyOn(ctrl, 'fetchAllCards');

        rootScope.$broadcast('newCardEvent', {"title": "Test", "body" : "Test"});

        expect(ctrl.fetchAllCards).toHaveBeenCalled();
    });

    it('should refresh on delete', function() {
        spyOn(ctrl, 'fetchAllCards');
        spyOn(cardService, 'deleteCard').andReturn({
            success: function(func) {
                func();
            }
        });

        ctrl.deleteCard({"title": "Test", "body" : "Test"});

        expect(ctrl.fetchAllCards).toHaveBeenCalled();
    });

});