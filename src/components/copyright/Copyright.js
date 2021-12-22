import React from 'react';
import './Copyright.scss';

let Copyright = ({ copyrightClassName, copyrightValue }) => {
	return (
		<>
			<p className={copyrightClassName}>{copyrightValue}</p>
		</>
	);
};

export default Copyright;
