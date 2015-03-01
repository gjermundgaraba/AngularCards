'use strict';

describe('cardsService-module', function() {

    beforeEach(module('cardService-module'));

    describe('cardService-module service', function(){

        var httpBackend, CardServiceTestObject;

        beforeEach(inject(function($httpBackend, CardService) {
            httpBackend = $httpBackend;
            httpBackend.when('GET', 'cards-module/cards_data.json').respond([
                {
                    "title": "This is a title",
                    "body": "This is a body"
                },
                {
                    "title": "This some other title",
                    "body": "This is a body or something Yes Yes Yes Yes Yes"
                }
            ]);
            CardServiceTestObject = CardService;
        }));

        it('should GET cards', function() {
            httpBackend.expectGET('cards-module/cards_data.json');
            CardServiceTestObject.all().success(function(data){});
            httpBackend.flush();
        });

        it('should have 2  cards', function() {
            var returnData = [];
            CardServiceTestObject.all().success(function(data) {
                returnData = data;
            });
            httpBackend.flush();
            expect(returnData.length).toBe(2);
        });

    });
});