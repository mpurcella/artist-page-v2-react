import React from 'react';
import { NavLink } from 'react-router-dom';
import { mediaLinksData } from './MediaLinksData';
import './MediaLinks.scss';

let MediaLinks = (props) => {
	return (
		<ul className={props.className}>
			{mediaLinksData.map((data) => {
				return (
					<li className={'media-links-item'} key={data.id}>
						<NavLink exact='true' to={data.link} className='media-links-link'>
							{data.value}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default MediaLinks;
