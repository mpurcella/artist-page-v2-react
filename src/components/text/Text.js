import React from 'react';
import './Text.scss';

let Text = ({ textClassName, textValue }) => {
	return <p className={textClassName}>{textValue}</p>;
};

export default Text;
