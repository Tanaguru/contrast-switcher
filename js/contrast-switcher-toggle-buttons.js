/**
 * Contrast switcher - Toggle buttons
 *
 * Script by Romain Gervois (Tanaguru)
 *
 * To do:
 * - Don't use the raw text values to find the stylesheet
 * - There is a bug with Safari and the cookie: it doesn't accept accented letters inside the "title" attribute of <link />
 */

window.addEventListener('load', function(event) {
	var contrastedversion = false;
	if (getActiveStyleSheet() == 'Style avec contrastes conformes') {
		contrastedversion = true;
	}
	var contrastbuttons = document.querySelectorAll('.btn-contrast');
	for (var i = 0; i < contrastbuttons.length; i++) {

		// Initial state of the button (according to the activated style sheet)
		var attribute = contrastbuttons[i].getAttributeNode('aria-pressed') || contrastbuttons[i].getAttributeNode('data-pressed');
		if (contrastedversion && contrastbuttons[i].getAttribute(attribute.name) == 'false') {
			contrastbuttons[i].setAttribute(attribute.name, 'true');
			if (contrastbuttons[i].dataset.alternatetext) {
				var currenttext = contrastbuttons[i].textContent;
				contrastbuttons[i].replaceChild(document.createTextNode(contrastbuttons[i].dataset.alternatetext), contrastbuttons[i].firstChild);
				contrastbuttons[i].dataset.alternatetext = currenttext;
			}
		}

		// Toggle button (HTML or ARIA)
		contrastbuttons[i].addEventListener('click', function(event) {
			var attribute = this.getAttributeNode('aria-pressed') || this.getAttributeNode('data-pressed');
			this.setAttribute(attribute.name, attribute.value == 'true' ? 'false' : 'true');
			if (this.getAttribute(attribute.name) == 'true') {
				setActiveStyleSheet('Style avec contrastes conformes');
			}
			else {
				setActiveStyleSheet('Style classique');
			}
			if (this.dataset.alternatetext) {
				var currenttext = this.textContent;
				this.replaceChild(document.createTextNode(this.dataset.alternatetext), this.firstChild);
				this.dataset.alternatetext = currenttext;
			}
		}, false);
		contrastbuttons[i].hidden = false;
	}
}, false);
