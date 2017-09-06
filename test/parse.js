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
    it('should return object parsed from a string', function() {
        assert.deepEqual(
            {make:'1',model:'3',fuel:'3',gearbox:'3',firstRegistration:'2015-01',priceRange:'9996,79000',powerRange:'71,350'},
            parser.valuestringparse('/make/1/model/3/fuel/3/gearbox/3/firstRegistration/2015-01/priceRange/9996,79000/powerRange/71,350')
        );
    });
});
