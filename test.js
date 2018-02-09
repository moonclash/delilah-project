const assert = require('assert');

function foo(a, b) {
  return a + b;
}

describe('Calculator', function() {
  describe('foo()', function(){
    it('should add numbers', function() {
      assert.equal(foo(1,2), 3);
    })
  })
})