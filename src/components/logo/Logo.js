import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

let Logo = ({ logoClassName, logoSrc, closeNavMenu }) => {
	return (
		<Link to='/' onClick={closeNavMenu}>
			<img className={logoClassName} src={logoSrc} alt='' />
		</Link>
	);
};

export default Logo;
