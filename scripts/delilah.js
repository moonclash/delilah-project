(function iife() {
	document.addEventListener('DOMContentLoaded', () => {
		const Element = {
			init (domElement) {
				this.element = document.querySelector(domElement);
				return this;
			}
		}

		Element.find = function(el) {
			return this.element.querySelector(el);
		}
		
		const el = Object.create(Element);
		el.init('header');
		el.find('h1').addEventListener('click', () => alert('hey'));
		
	});
})();

// select element