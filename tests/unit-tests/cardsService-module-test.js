'use strict';

describe('cardService module service', function(){

    var httpBackend, CardServiceTestObject;

    beforeEach(module('app.cardService'));
    beforeEach(inject(function($httpBackend, CardService) {
        httpBackend = $httpBackend;
        CardServiceTestObject = CardService;
    }));

    it('should make a call to get all cards', function() {
        httpBackend.expectGET('/cards').respond(200);
        CardServiceTestObject.all();
        httpBackend.verifyNoOutstandingExpectation();
    });

    it('should have 2 cards', function() {
        httpBackend.whenGET('/cards').respond(200, [{}, {}]);

        var data;
        CardServiceTestObject.all().then(function(returnData) {
            data = returnData;
        });
        httpBackend.flush();//
        expect(data).toBeDefined();
    });

});