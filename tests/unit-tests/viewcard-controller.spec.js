'use strict';
describe('ViewCardController', function(){

    var modalInstanceMock, cardMock, ctrl;

    beforeEach(module('app.viewCard'));
    beforeEach(inject(function($controller) {
        modalInstanceMock = {
            close: function() {},
            dismiss: function() {}
        };

        cardMock = {
            title: "title",
            body: "body",
            createdAt: "12345678"
        };

        ctrl = $controller('ViewCardController', {$modalInstance: modalInstanceMock, card: cardMock});
    }));

    it('should have card in scope after creation', function() {
       expect(ctrl.card).toBe(cardMock);
    });

    it('should close modal on ok', function() {
        spyOn(modalInstanceMock, 'dismiss');

        ctrl.ok();

        expect(modalInstanceMock.dismiss).toHaveBeenCalled();
    });

});