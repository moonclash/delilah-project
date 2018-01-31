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
        this.alertTitle = title;
        this.alertContent = content;
      }
    }

    Alerts.showAlert = function() {
      
    }

    const passwordAlert = Object.create(Alerts);
    passwordAlert.init('Wrong password', 'please enter your correct password');


    Alerts.showAlert();

		


	});
})();

// select element