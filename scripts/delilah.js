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
      const thisElement = Object.create(this);
      return thisElement.init(this.element.querySelector(el))
    }

    Element.event = function(event, handler) {
      this.element.addEventListener(event, handler);
      return this;
    }

    Element.text = function(text) {
      this.element.textContent = text;
      return this;
    }

    Element.addClass = function(className) {
      this.element.classList.add(className);
      return this;
    }


    Element.removeClass = function(className) {
      this.element.classList.remove(className);
      return this;
    }

    // single element functionality 


    // Multiple elements functionality


    const Elements = Object.create(Element);

    Elements.init = function(domElement) {
      this.element = document.querySelectorAll(domElement);
      return this;
    }

    Elements.event = function(event, handler) {
      this.element.forEach(element => element.addEventListener(event, handler));
      return this;
    }

    Elements.text = function(text) {
      this.element.forEach(element => element.textContent = text);
    }

    const Alert = {
      init(title = null, content = null) {
        this.alertElement = Element.init('.de-alert');
        if (title && content) {
          this.title = title;
          this.content = content;
        }
        this.alertElement.find('.de-btn').event('click', this.closeAlert);
        return this;
      }
    }

    Alert.showAlert = function() {
      const body = Object.create(Element);
      body.init('body');
      this.alertElement.find('.alert-header h3').text(this.title);
      this.alertElement.find('.alert-body p').text(this.content);
      body.addClass('alert-open');
     
    }

    Alert.closeAlert = function() {
      const body = Element.init('body');
      body.removeClass('alert-open');
    }

    const al = Object.create(Alert);
    al.init('invalid input', 'you cant do this bro');
    al.showAlert();



    // Multiple elements functionality



	});
})();

// select element