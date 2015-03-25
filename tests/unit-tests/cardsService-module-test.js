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
        CardServiceTestObject.getAllCards();
        httpBackend.verifyNoOutstandingExpectation();
    });

    it('should send data when API is successful', function() {
        httpBackend.whenGET('/cards').respond(200, [{}, {}]);

        var data;
        CardServiceTestObject.getAllCards().then(function(returnData) {
            data = returnData;
        });

        httpBackend.flush();
        expect(data).toBeDefined();
        expect(data.length).toBe(2);
    });

    it('should send an error when API fails', function() {
        httpBackend.whenGET('/cards').respond(500);

        var err;
        CardServiceTestObject.getAllCards().catch(function(e) {
           err = e;
        });
        httpBackend.flush();

        expect(err).toBeDefined();
    });

});