import React from 'react';
import './FirstNameInput.scss';

let FirstNameInput = (props) => {
	return (
		<input
			type='text'
			name='firstName'
			className='first-name-input'
			id='firstNameInput'
			placeholder='First Name'
			required='required'
			autoCorrect='off'
			onChange={props.handleFirstNameChange}
			value={props.firstNameState}
		/>
	);
};

export default FirstNameInput;
