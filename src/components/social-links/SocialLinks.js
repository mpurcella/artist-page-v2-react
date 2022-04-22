import React from 'react';
import { socialLinksData } from './SocialLinksData';
import './SocialLinks.scss';

let Social = (props) => {
	return (
		<ul className={props.className}>
			{socialLinksData.map((data) => {
				return (
					<li className='nav-social-item' key={data.id}>
						<a href={data.link} className='nav-social-link' aria-label={data.ariaLabel}>
							{data.icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Social;
