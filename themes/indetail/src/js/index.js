'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './components/mobileMenu';

window.addEventListener('DOMContentLoaded', function() {
	const menuElement = document.querySelector('[data-menu]');

	if (menuElement) {
		ReactDOM.render(<MobileMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />, menuElement);
	}
});
