'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import NavUrls from '../utils/navUrls';

const navUrls = NavUrls();
const mobileWidth = 769;

class MobileMenu extends Component {

	constructor() {
		super();

		this.state = {
			shouldMenuRender: window.innerWidth < mobileWidth
		};
	}

	componentDidMount() {
		window.addEventListener('resize', (e) => {
			this.setState({
				shouldMenuRender: window.innerWidth < mobileWidth
			});
		});
	}

	render() {
		if (!this.state.shouldMenuRender) {
			return false;
		}

		const styles = {
			bmBurgerButton: {
				zIndex: 10,
				position: 'absolute',
				width: '36px',
				height: '25px',
				right: '20px',
				top: '21px'
			},
			bmBurgerBars: {
				background: '#fff',
				height: '5px',
			},
			bmCrossButton: {
				height: '24px',
				width: '24px'
			},
			bmCross: {
				background: '#fff'
			},
			bmMenuWrap : {
				zIndex: 15
			},
			bmMenu: {
				background: 'rgba(0, 0, 0, 0.8)',
				padding: '2.5em 1.5em 0',
				fontSize: '1.15em'
			},
			bmMorphShape: {
				fill: '#373a47'
			},
			bmItemList: {
				color: '#b8b7ad',
				padding: '0.8em'
			},
			bmOverlay: {
				background: 'rgba(0, 0, 0, 0.3)'
			}
		};

		return (
			<Menu right styles={styles}>
				{navUrls.map(function(navUrl, index){
					return <a key={index} className="menu-item" href={navUrl.href}>{navUrl.text}</a>;
				})}
      </Menu>
		);
	}

}

export default MobileMenu;
