'use strict';
describe('AddCardController', function(){

    var rootScope, modalInstanceMock, ctrl, CardService, deferred;

    beforeEach(module('app.addCard'));
    beforeEach(module(function ($provide) {
        CardService = {
            postCard: function() {}
        };

        $provide.value('CardService', CardService);
    }));
    beforeEach(inject(function($rootScope, $controller, $q) {
        deferred = $q.defer();
        rootScope = $rootScope.$new();
        modalInstanceMock = {
            close: function() {},
            dismiss: function() {}
        };

        ctrl = $controller('AddCardController', {$modalInstance: modalInstanceMock, $rootScope: rootScope});
    }));
    beforeEach(function() {
        spyOn(CardService, 'postCard').andReturn(deferred.promise);
    });

    it('should have empty card', function() {
        expect(ctrl.newCard.title).toBe('');
        expect(ctrl.newCard.body).toBe('');
    });

    it('should set up createdAt on ok', function() {
        ctrl.ok();

        expect(ctrl.newCard.createdAt).toBeDefined();
        expect(ctrl.newCard.createdAt).not.toBe('');
    });

    it('should broadcast newCardEvent on ok', function() {
        spyOn(rootScope, '$broadcast');

        ctrl.ok();
        deferred.resolve();
        rootScope.$digest();

        expect(rootScope.$broadcast).toHaveBeenCalledWith('newCardEvent', ctrl.newCard);
    });

    it('should close modal on ok', function() {
        spyOn(modalInstanceMock, 'close');

        ctrl.ok();

        expect(modalInstanceMock.close).toHaveBeenCalled();
    });

    it('should close modal on cancel', function() {
        spyOn(modalInstanceMock, 'dismiss');

        ctrl.cancel();

        expect(modalInstanceMock.dismiss).toHaveBeenCalled();
    });

});