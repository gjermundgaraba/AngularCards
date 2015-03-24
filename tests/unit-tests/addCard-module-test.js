'use strict';
describe('addCard module controller', function(){

    var rootScope, modalInstanceMock, ctrl, cardServiceMock;

    beforeEach(module('app.addCard'));
    beforeEach(inject(function($rootScope, $controller) {
        rootScope = $rootScope.$new();
        modalInstanceMock = {
            close: function() {},
            dismiss: function() {}
        };

        cardServiceMock = {
            postCard: function() {
                return {
                    success: function(func) {
                        func();
                    }
                };
            }
        };

        ctrl = $controller('AddCardController', {$modalInstance: modalInstanceMock, $rootScope: rootScope, CardService: cardServiceMock});
    }));

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