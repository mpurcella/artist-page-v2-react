import React from 'react';

let Label = (props) => {
	return (
		<label htmlFor={props.htmlFor} className={props.className}>
			{props.value}
		</label>
	);
};

export default Label;
