'use strict';

describe('my app', function() {

  browser.get('index.html');

  it('should have cards loaded', function() {
      expect(element(by.css('.card')).isPresent()).toBe(true);
  });

});
