(function iife() {
	document.addEventListener('DOMContentLoaded', () => {

    // single element functionality 

    const Element = {
      init(domElement) {
        if (typeof domElement == 'string') {
          this.element = document.querySelector(domElement);
        }
        else {
          this.element = domElement;
        }
       
        return this;
      }
    }

    Element.find = function(el) {
      return this.init(this.element.querySelector('h1'));
    }

    Element.event = function(event, handler) {
      this.element.addEventListener(event, handler);
      return this;
    }

    Element.text = function(text) {
      this.element.textContent = text;
      return this;
    }

    // single element functionality 


    // Multiple elements functionality


    const Elements = Object.create(Element);

    Elements.init = function(domElement) {
      this.element = document.querySelectorAll(domElement);
    }

    Elements.event = function(event, handler) {
      this.element.forEach(element => element.addEventListener(event, handler));
    }

    const cards = Object.create(Elements);
    cards.init('.de-card');
    cards.event('click', () => console.log(this));


    // Multiple elements functionality



	});
})();

// select element