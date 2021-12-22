import React from 'react';
import Copyright from '../copyright/Copyright';
import { copyrightData } from '../copyright/CopyrightData';
import Social from '../social-links/SocialLinks';
import './Footer.scss';

let Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<div className='footer-nav'>
					<Copyright copyrightClassName={copyrightData.className} copyrightValue={copyrightData.value} />
					<Social className='nav-social-list footer-nav' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
