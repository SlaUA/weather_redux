import React from 'react';
import {NavLink} from 'react-router-dom';
require('../../styles/TopMenu.styl');

export default class TopMenu extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.links = [
			{
				text: 'Weather',
				to: '/'
			},
			{
				text: 'DragNDrop',
				to: '/dnd'
			}
		];
	}
	
	render() {
		
		let links = this.links.map(
			(link, index) =>
				<li className='menuSpread' key={index}>
					<NavLink className='menuItem'
					         exact={link.exact || true}
					         activeClassName='active'
					         to={link.to}>
						{link.text}
					</NavLink>
				</li>
		);
		
		return (
			<div className='topMenuLinksWrapper'>
				<ul className='topMenu'>
					{links}
				</ul>
			</div>
		);
	}
}