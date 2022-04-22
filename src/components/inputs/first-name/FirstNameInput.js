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
			aria-required='true'
			aria-label='First Name'
			autoCorrect='off'
			onChange={props.handleFirstNameChange}
			value={props.firstNameState}
		/>
	);
};

export default FirstNameInput;
