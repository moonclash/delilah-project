(function iife() {
    document.addEventListener('DOMContentLoaded', () => {

        // single element functionality 

        const Element = {
            init(domElement) {
                if (typeof domElement == 'string') {
                    this.element = document.querySelector(domElement);
                } else {
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

        Element.toggleClass = function(className) {
            this.element.classList.toggle(className);
            return this;
        }


        Element.getDimension = function(dimension) {
          const elementDimensions = this.element.getBoundingClientRect();
          return elementDimensions[dimension];
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


        // Multiple elements functionality


        // Alert functionality

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

        // Alert functionality

        // Modal functionality

        const Modal = {
            init(modalId) {
                this.modalElement = Element.init(modalId);
                this.modalElement.find('button[data-toggle=close]').event('click', this.closeModal);
            }
        }

        Modal.openModal = function() {
            const body = Element.init('body');
            body.addClass('modal-open');
        }

        Modal.closeModal = function() {
            const body = Element.init('body');
            body.removeClass('modal-open');
        }

        // Modal functionality


        // Appearable elements functionality

        const Appearable = {
          init(el) {
            const screenMiddle = window.innerHeight / 2;
            this.appearable = Element.init(el);
            const top = this.appearable.getDimension('top');
            
          }
        }

        // Appearable elements functionality

        const h1Animate = Object.create(Appearable);
        Appearable.init('h1');


        





    });
})();

// select element