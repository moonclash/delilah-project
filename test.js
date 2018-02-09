const expect = chai.expect;


describe('Array', function() {
    it('should return -1 when the value is not present', function() {
      expect(1).to.equal(1);
    });
});

describe('Element', function() {
  it('should instantiate a single Element', function() {
    expect(Element.init('header')).to.be.an('object');
  })
})