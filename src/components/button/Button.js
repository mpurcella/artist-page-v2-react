import React from 'react';
import './Button.scss';

let Button = ({ btnType, btnClassName, btnValue, handleSubmit }) => {
	return (
		<button className={btnClassName} type={btnType} onClick={handleSubmit}>
			{btnValue}
		</button>
	);
};

export default Button;
