import React from 'react';
import './Subheading.scss';

let Subheading = ({ subheadingValue, subheadingClassName }) => {
	return (
		<>
			<h5 className={subheadingClassName}>{subheadingValue}</h5>
		</>
	);
};

export default Subheading;
