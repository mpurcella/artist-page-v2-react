import React from 'react';
import './LastNameInput.scss';

let LastNameInput = (props) => {
	return (
		<input
			type='text'
			name='lastName'
			className='last-name-input'
			id='lastNameInput'
			autoCorrect='off'
			onChange={props.handleLastNameChange}
			value={props.lastNameState}
		/>
	);
};

export default LastNameInput;
