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
		};

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
          console.log(this.alertElement);
        }
        this.alertElement.find('.de-btn').event('click', this.closeAlert);
        return this;
      }
    }

    const Alert = Object.create(Alerts);

    Alert.showAlert = function() {
      document.body.classList.add('alert-open');
      return this;
    }

    Alert.closeAlert = function() {
      document.body.classList.remove('alert-open');
    }

    const passwordAlert = Alert.init('Invalid input', 'please provide different details');
    const cards = Elements.init('.de-card');
    cards.event('click',  Alert.showAlert);

	});
})();

// select element