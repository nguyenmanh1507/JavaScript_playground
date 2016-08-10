var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of string', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        });
      }
    });

    it('should containt Luke Skywalker', function() {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});
