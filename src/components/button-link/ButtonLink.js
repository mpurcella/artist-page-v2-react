import React from 'react';
import './ButtonLink.scss';

let ButtonLink = ({ btnLinkPath, btnLinkClassName, btnLinkValue }) => {
	return (
		<a href={btnLinkPath} className={btnLinkClassName}>
			{btnLinkValue}
		</a>
	);
};

export default ButtonLink;
