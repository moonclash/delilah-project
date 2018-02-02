(function iife() {
	document.addEventListener('DOMContentLoaded', () => {
		const Element = {
			init (domElement) {
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
			return this.init(this.element.querySelector(el));
		};

		Element.event = function(event, action) {
			this.element.addEventListener(event, action);
      return this;
		};

    Element.addClass = function(className) {
        this.element.classList.add(className);
        return this;
    }

    Element.removeClass = function(className) {
        this.element.classList.remove(className);
        return this;
    }

    Element.toggleClass = function(className) {
        this.element.classList.toggle(className);
        return this;
    }

		const Elements = Object.create(Element);

		Elements.init = function(domElements) {
			this.element = document.querySelectorAll(domElements);
			return this;
		}

		Elements.event = function(event, action) {
			this.element.forEach(element => element.addEventListener(event, action));
		}

    const Alerts = {
      init(title = null, content = null) {
        this.alertElement = Element.init('.de-alert');
        if (title && content) {
          this.title = title;
          this.content = content;
          console.log(this);
        }
        this.alertElement.find('.de-btn').event('click', this.closeAlert);
        return this;
      }
    }

    const Alert = Object.create(Alerts);

    Alert.showAlert = function() {
      console.log(this);
      document.body.classList.add('alert-open');
      return this;
    }

    const foo = Alert.showAlert.bind(Alert);

    Alert.closeAlert = function() {
      document.body.classList.remove('alert-open');
    }

    const passwordAlert = Alert.init('Invalid input', 'please provide different details');
    const cards = Elements.init('.de-card');
    cards.event('click',  foo);

	});
})();

// select element