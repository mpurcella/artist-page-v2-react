import React from 'react';
import './Logo.scss';

let Logo = ({ logoClassName, logoSrc, logoAlt }) => {
	return (
		<>
			<img className={logoClassName} src={logoSrc} alt={logoAlt} />
		</>
	);
};

export default Logo;
