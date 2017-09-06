var assert = require('assert');
var parser = require('../index.js');

describe('valuestringparse', function() {
    it('should return object parsed from a string', function() {
        assert.deepEqual(
            {key1:'value1'},
            parser.valuestringparse('key1/value1')
        );
    });
    it('should return object parsed from a string', function() {
        assert.deepEqual(
            {key1:'value1',key2:'value2'},
            parser.valuestringparse('key1/value1/key2/value2')
        );
    });
    it('should return object parsed from a string', function() {
        assert.deepEqual(
            {key1:'value1',key2:'value2'},
            parser.valuestringparse('/key1/value1/key2/value2/')
        );
    });
    it('should return object parsed from a string', function() {
        assert.deepEqual(
            {key1:'value1',key2:'value2'},
            parser.valuestringparse('/key1/value1/key2/value2/ignorethiskey/')
        );
    });
});
