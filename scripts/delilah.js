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
            return thisElement.init(this.element.querySelector(el));
        }

        Element.event = function(event, handler) {
            this.element.addEventListener(event, handler);
            return this;
        }

        Element.text = function(text) {
            if (text) {
                this.element.textContent = text;
                return this;
            }
            return this.element.textContent;
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

        Element.children = function() {
            const nodes = [...this.element.childNodes].filter(e => e.nodeType === 1);
            return nodes;
        }


        // Multiple elements functionality


        const Elements = {

        }

        Elements.init = function(domElement) {
            this.elements = document.querySelectorAll(domElement);
            return this;
        }

        Elements.event = function(event, handler) {
            this.elements.forEach(element => element.addEventListener(event, handler));
            return this;
        }

        Elements.text = function(text) {
            this.elements.forEach(element => element.textContent = text);
        }


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
            if (this.title && this.content) {
                this.alertElement.find('.alert-header h3').text(this.title);
                this.alertElement.find('.alert-body p').text(this.content);
            }
            body.addClass('alert-open');

        }

        Alert.closeAlert = function() {
            const body = Element.init('body');
            body.removeClass('alert-open');
        }


        // Modal functionality

        const Modal = {
            init(modalId) {
                this.modalElement = Element.init(modalId);
                this.modalElement.find('button[data-toggle=close]').event('click', this.closeModal);
                return this;
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


        // Appearable elements functionality

        const Appearables = {
            init() {
                function animateThis() {
                    const boxes = Elements.init('.de-appearable');
                    const mid = window.innerHeight / 2;

                    function moveElement(element) {
                        element = Element.init(element);
                        if (element.getDimension('top') <= mid) {
                            element.addClass('appear');
                        }
                    }
                    boxes.elements.forEach(box => moveElement(box));
                }

                document.addEventListener('scroll', animateThis);
            }
        }

        // Parallax scroll

        const Parallax = {
            init(factor) {
                const parallaxElement = Element.init('header');
                const parallaxItems = Elements.init('.parallax-item');
                function parallaxScroll() {
                    const windowScroll = window.scrollY;
                    parallaxItems.elements.forEach((item, index) => {
                        item.style = `transform:translateY(${windowScroll /  factor * (index + 1)}%)`;
                    })
                }
                document.addEventListener('scroll', parallaxScroll);
            }
        }
