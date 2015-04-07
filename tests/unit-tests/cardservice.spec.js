'use strict';

describe('CardService', function(){

    var httpBackend, CardServiceTestObject;

    beforeEach(module('app.cardService'));
    beforeEach(inject(function($httpBackend, CardService) {
        httpBackend = $httpBackend;
        CardServiceTestObject = CardService;
    }));

    describe('GET method', function() {
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

        it('should send an error when GET API fails', function() {
            httpBackend.whenGET('/cards').respond(500);

            var err;
            CardServiceTestObject.getAllCards().catch(function(e) {
                err = e;
            });
            httpBackend.flush();

            expect(err).toBeDefined();
        });
    });

    describe('POST method', function() {
        it('should send an error when POST API fails', function() {
            httpBackend.whenPOST('/cards').respond(500);

            var err;
            CardServiceTestObject.postCard({}).catch(function(e) {
                err = e;
            });
            httpBackend.flush();

            expect(err).toBeDefined();
        });
    });

    describe('DELETE method', function() {
        it('should send an error when DELETE API fails', function() {
            httpBackend.whenDELETE('/cards').respond(500);

            var err;
            CardServiceTestObject.deleteCard({}).catch(function(e) {
                err = e;
            });
            httpBackend.flush();

            expect(err).toBeDefined();
        });
    });

});