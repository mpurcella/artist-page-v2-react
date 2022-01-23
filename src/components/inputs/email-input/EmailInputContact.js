import React from 'react';
import './EmailInput.scss';

let EmailInputContact = (props) => {
	return (
		<input
			type='email'
			name='emailContact'
			className={props.className}
			id='emailInputContact'
			placeholder='Email Address'
			required='required'
			autoCorrect='off'
			onChange={props.handleEmailChange}
			value={props.emailState}
		/>
	);
};

export default EmailInputContact;
