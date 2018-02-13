const expect = chai.expect;

// Element tests

describe('Element', function() {
  const header = Element.init('header');

  it('should instantiate a single Element', function() {
    expect(header).to.be.an('object');
  });

  it('should have an element property', function() {
    expect(header).to.have.property('element');
  });

  it('should be able to find child nodes', function(){
    expect(header.find('h1')).to.be.an('object');
  });

  it('should be able to return the text of an element', function() {
    expect(header.text()).to.be.a('string');
  });

  it('should return a requested dimension of the element', function() {
    expect(header.getDimension('right')).to.be.a('number');
  });

});

describe('Alert', function() {
  const dAlert = Alert.init();

   it('should create an Alert instance', function() {
    expect(dAlert).to.be.an('object');
  });

   it('should not add properties if no parameters provided', function() {
    expect(dAlert.title).to.equal(undefined);
  });



});