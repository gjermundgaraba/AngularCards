'use strict';

describe('addCard module', function() {

    beforeEach(module('app.addCard'));

    describe('addCard module controller', function(){

        var rootScope, modalInstance, ctrl, cardServiceMock, testCard;

        beforeEach(inject(function($rootScope, $controller) {
            rootScope = $rootScope.$new();
            modalInstance = {
                close: function() {},
                dismiss: function() {}
            };

            testCard = { title: '', body: '', createdAt: '12345678'};

            cardServiceMock = {
                all: function () {
                    return {
                        success: function(func) {
                            func(cards);
                        }
                    };
                },
                postCard: function(card) {
                    return {
                        success: function(func) {
                            $rootScope.$broadcast('newCardEvent', testCard);
                            func();
                        }
                    };
                }
            };

            spyOn(rootScope, '$broadcast').andCallThrough();;

            ctrl = $controller('AddCardController', {$modalInstance: modalInstance, $rootScope: rootScope, CardService: cardServiceMock});
        }));

        it('should have empty card', function() {
            expect(ctrl.newCard.title).toBe('');
            expect(ctrl.newCard.body).toBe('');
        });

        it('should broadcast newCardEvent on ok', function() {
            ctrl.ok();
            expect(rootScope.$broadcast).toHaveBeenCalledWith('newCardEvent', ctrl.newCard);
        });

    });
});