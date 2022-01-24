import React from 'react';
import Subscribe from '../subscribe/Subscribe';
import Copyright from '../copyright/Copyright';
import { copyrightData } from '../copyright/CopyrightData';
import Social from '../social-links/SocialLinks';
import './Footer.scss';

let Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<div className='footer-subscribe'>
					<Subscribe />
				</div>
				<div className='footer-nav'>
					<div className='footer-nav-copyright'>
						<Copyright copyrightClassName={copyrightData.className} copyrightValue={copyrightData.value} />
					</div>
					<div className='footer-nav-social'>
						<Social className='nav-social-list footer-social' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
