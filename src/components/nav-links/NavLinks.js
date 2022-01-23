import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinksData } from './NavLinksData';
import './NavLinks.scss';

let NavLinks = (props) => {
	return (
		<ul className='nav-links-list'>
			{navLinksData.map((data) => {
				return (
					<li className='nav-links-item' key={data.id}>
						<NavLink
							exact='true'
							to={data.link}
							className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
							onClick={props.closeNavMenu}
						>
							{data.value}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
