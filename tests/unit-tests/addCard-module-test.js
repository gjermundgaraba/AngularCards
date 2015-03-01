'use strict';

describe('addCard-module', function() {

    beforeEach(module('addCard-module'));

    describe('addCard-module controller', function(){

        var scope, rootScope, modalInstance, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            rootScope = $rootScope.$new();
            scope = $rootScope.$new();
            modalInstance = {
                close: function() {},
                dismiss: function() {}
            };

            spyOn(rootScope, '$broadcast').andCallThrough();;

            ctrl = $controller('AddCardController', {$scope: scope, $modalInstance: modalInstance, $rootScope: rootScope});
        }));

        it('should have empty card', function() {
            expect(scope.newCard.title).toBe('');
            expect(scope.newCard.body).toBe('');
        });

        it('should broadcast newCardEvent on ok', function() {
            scope.ok();
            expect(rootScope.$broadcast).toHaveBeenCalledWith('newCardEvent', scope.newCard);
        });

    });
});