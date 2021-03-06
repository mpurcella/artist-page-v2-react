import React from 'react';
import './EmailInput.scss';

let EmailInputSubscribe = (props) => {
	return (
		<input
			type='email'
			name='emailSubscribe'
			className={props.className}
			id='emailInputSubscribe'
			placeholder='Email Address'
			required='required'
			aria-required='true'
			aria-label='Email Address'
			autoCorrect='off'
			onChange={props.handleEmailChange}
			value={props.emailState}
		/>
	);
};

export default EmailInputSubscribe;
