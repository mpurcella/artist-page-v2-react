import React, { useState } from 'react';
import EmailInputContact from '../../inputs/email-input/EmailInputContact';
import FirstNameInput from '../../inputs/first-name/FirstNameInput';
import LastNameInput from '../../inputs/last-name/LastNameInput';
import MessageInput from '../../inputs/message/MessageInput';
import Button from '../../button/Button';
import { submitButtonData } from '../../button/ButtonData';
import './ContactForm.scss';

let ContactForm = (props) => {
	let [firstName, setFirstName] = useState('');
	let [lastName, setLastName] = useState('');
	let [email, setEmail] = useState('');
	let [message, setMessage] = useState('');

	let handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	let handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	let handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	let handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	let handleSubmit = (e) => {
		let re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

		if (re.test(email) && firstName.length > 0 && email.length > 0 && message.length > 0) {
			e.preventDefault();
			setFirstName('');
			setLastName('');
			setEmail('');
			setMessage('');
			props.handleClick();
		} else {
			return;
		}
	};

	return (
		<form className='contact-form'>
			<div className='first-name-input-container'>
				<FirstNameInput firstNameState={firstName} handleFirstNameChange={handleFirstNameChange} />
			</div>
			<div className='last-name-input-container'>
				<LastNameInput lastNameState={lastName} handleLastNameChange={handleLastNameChange} />
			</div>
			<div className='email-input-container'>
				<EmailInputContact
					className='email-input email-input-contact'
					emailState={email}
					handleEmailChange={handleEmailChange}
				/>
			</div>
			<div className='message-input-container'>
				<MessageInput messageState={message} handleMessageChange={handleMessageChange} />
			</div>
			<div className='contact-form-submit-btn'>
				<Button
					btnClassName={submitButtonData.className}
					btnValue={submitButtonData.value}
					btnType={submitButtonData.type}
					handleSubmit={handleSubmit}
				/>
			</div>
		</form>
	);
};

export default ContactForm;
