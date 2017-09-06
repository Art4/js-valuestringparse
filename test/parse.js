var assert = require('assert');
var parser = require('../index.js');

describe('valuestringparse', function() {
    it('should return string with somthing appended', function() {
        assert.equal('it works!', parser.valuestringparse('it'));
    });
});
