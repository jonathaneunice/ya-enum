var assert = require('chai').assert;

var Enum;

// Test both ES2015 base code and ES5 generated code
['enum', 'enum.es5'].forEach(ver => {
  describe(ver + '.js', function() {
    Enum = require('../' + ver);
    test_enum();
  });
});

function test_enum() {

describe('enum', function() {

  it('should accept array constructor', function(){
    foods = new Enum(['fish', 'meat', 'apples']);
    assert.deepEqual(foods.values, ['fish', 'meat', 'apples']);
    assert.equal(foods.index, 0);
  });

  it('should accept non-array constructor', function(){
    foods = new Enum('fish', 'meat', 'apples');
    assert.deepEqual(foods.values, ['fish', 'meat', 'apples']);
    assert.equal(foods.index, 0);
  });

  it('should accept explicit index', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    assert.deepEqual(foods.values, ['fish', 'meat', 'apples']);
    assert.equal(foods.index, 2);
  });

  it('should allow string construction', function(){
    foods = Enum.fromString('fish meat apples');
    assert.deepEqual(foods.values, ['fish', 'meat', 'apples']);
    assert.equal(foods.index, 0);

    foods = Enum.fromString('fish meat apples', 2);
    assert.deepEqual(foods.values, ['fish', 'meat', 'apples']);
    assert.equal(foods.index, 2);
  });


  it('should know its value', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    assert.equal(foods.index, 2);
    assert.equal(foods.value, 'apples');
  });

  it('should allow setting by value', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    foods.value = 'meat';
    assert.equal(foods.index, 1);
    assert.equal(foods.value, 'meat');
  });

  it('should support indexOf', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    assert.equal(foods.indexOf('fish'), 0);
    assert.equal(foods.indexOf('meat'), 1);
    assert.equal(foods.indexOf('apples'), 2);
  });

  it('should throw error if constructed with bad index', function(){
    assert.throws(function(){
      foods = new Enum(['fish', 'meat', 'apples'], 12);
    }, TypeError);
  });

  it('should throw error if bad index set', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    assert.throws(function(){ foods.index = 44; }, TypeError);
  });

  it('should throw error if bad value set', function(){
    foods = new Enum(['fish', 'meat', 'apples'], 2);
    assert.throws(function(){ foods.value = 'tuna'; }, TypeError);
  });

});

}
