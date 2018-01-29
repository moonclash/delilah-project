(function iife() {
	document.addEventListener('DOMContentLoaded', () => {
		const Element = {
			init(element) {
				this.element = document.querySelector(element);
				return this;
			},
			find(child) {
				const childd = this.element.querySelector(child);
				console.log(childd);
				return childd;
				
			}
		}
		const el = Object.create(Element);
		el.init('header');
		el.find('h1');
	});
})();

// select element