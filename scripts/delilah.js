(function iife() {
	document.addEventListener('DOMContentLoaded', () => {
		const Element = {
			init (domElement) {
				this.element = document.querySelector(domElement);
				this.children = null;
				const elementChildren = [...this.element.childNodes];
				if (elementChildren.length > 0) {
					this.children = elementChildren.filter(child => child.nodeType == 1);
				}
				
			}
		}

		Element.find = function(el) {
			console.log(this.children);
		}
		const el = Object.create(Element);
		el.init('header');
		el.find();
		
	});
})();

// select element