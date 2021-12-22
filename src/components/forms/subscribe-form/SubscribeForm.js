import React, { useState } from 'react';
import EmailInputSubscribe from '../../inputs/email-input/EmailInputSubscribe';
import Button from '../../button/Button';
import { subscribeButtonData } from '../../button/ButtonData';
import './SubscribeForm.scss';

let SubscribeForm = (props) => {
	let [email, setEmail] = useState('');

	let handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	let handleSubmit = (e) => {
		let re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

		if (re.test(email)) {
			e.preventDefault();
			setEmail('');
			props.handleClick();
		} else {
			return;
		}
	};

	return (
		<form className='artist-subscription-form'>
			<EmailInputSubscribe
				className='email-input email-input-subscribe'
				emailState={email}
				handleEmailChange={handleEmailChange}
			/>
			<Button
				btnClassName={subscribeButtonData.className}
				btnValue={subscribeButtonData.value}
				btnType={subscribeButtonData.type}
				handleSubmit={handleSubmit}
			/>
		</form>
	);
};

export default SubscribeForm;
