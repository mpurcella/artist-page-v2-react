import React from 'react';
import './HeadingData';
import './Heading.scss';

let Heading = ({ headingClassName, headingValue }) => {
	return (
		<>
			<h2 className={headingClassName}>{headingValue}</h2>
		</>
	);
};

export default Heading;
