(function iife() {
	document.addEventListener('DOMContentLoaded', () => {
		const Element = {
			init (domElement) {
				this.element = document.querySelector(domElement);
				console.log(this);
				return this;
			}
		}

		Element.find = function(el) {
			return this.element.querySelector(el);
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
      init(title, content) {
        this.alertElement = Element.init('.de-alert');
        this.alertTitle = title;
        this.alertContent = content;
        this.alertElement.find('.de-btn').event('click', this.closeAlert);
      }
    }

    Alerts.showAlert = function() {
      document.body.classList.add('alert-open');
    }

    Alerts.closeAlert = function() {
      document.body.classList.remove('alert-open');
    }

    const passwordAlert = Object.create(Alerts);
    const cards = Elements.init('.de-card');
    cards.event('click', Alerts.showAlert);
    passwordAlert.init('Wrong password', 'please enter your correct password');


    Alerts.showAlert();

		


	});
})();

// select element