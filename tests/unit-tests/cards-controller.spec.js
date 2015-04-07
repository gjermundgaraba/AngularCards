'use strict';

describe('CardsController', function(){

    var rootScope, ctrl, CardService, deferred, controllerInstantiatior;

    beforeEach(module('app.cards'));
    beforeEach(module(function ($provide) {
        CardService = {
            getAllCards: function() {},
            deleteCard: function() {}
        };

        $provide.value('CardService', CardService);
    }));
    beforeEach(inject(function($rootScope, $controller, $q) {
        deferred = $q.defer();
        rootScope = $rootScope.$new();
        controllerInstantiatior = $controller;
    }));
    beforeEach(function() {
        spyOn(CardService, 'getAllCards').andReturn(deferred.promise);
        ctrl = controllerInstantiatior('CardsController', {$rootScope: rootScope});
    });

    it('should populate cards from service', function() {
        ctrl.fetchAllCards();

        deferred.resolve([{}, {}]);
        rootScope.$digest();

        expect(ctrl.cards.length).toBe(2);
    });

    it('should refresh on newCardEvent', function() {
        spyOn(ctrl, 'fetchAllCards');

        rootScope.$broadcast('newCardEvent', {});

        expect(ctrl.fetchAllCards).toHaveBeenCalled();
    });

    it('should refresh on delete', function() {
        spyOn(ctrl, 'fetchAllCards');
        spyOn(CardService, 'deleteCard').andReturn(deferred.promise);

        ctrl.deleteCard({});

        deferred.resolve();
        rootScope.$digest();

        expect(ctrl.fetchAllCards).toHaveBeenCalled();
    });

});