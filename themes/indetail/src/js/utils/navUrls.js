'use strict';

let isTouchDevice = window.innerWidth < 769;

function NavUrls() {
	let arrayOfNavLinks = [];
	let navElement = document.querySelector('[data-nav]');
	let links = navElement.getElementsByTagName('a');

	for (let i = 0; i < links.length; i++) {
		arrayOfNavLinks.push({href:links[i].href, text:links[i].innerText});
	}

	return arrayOfNavLinks;
}

export default NavUrls;
