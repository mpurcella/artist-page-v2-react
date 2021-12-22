import React, { useState } from 'react';
import Label from '../../label/Label';
import EmailInputContact from '../../inputs/email-input/EmailInputContact';
import FirstNameInput from '../../inputs/first-name/FirstNameInput';
import LastNameInput from '../../inputs/last-name/LastNameInput';
import MessageInput from '../../inputs/message/MessageInput';
import SubjectInput from '../../inputs/subject/SubjectInput';
import Button from '../../button/Button';
import { submitButtonData } from '../../button/ButtonData';
import './ContactForm.scss';
import '../../label/Label.scss';

let ContactForm = (props) => {
	let [firstName, setFirstName] = useState('');
	let [lastName, setLastName] = useState('');
	let [email, setEmail] = useState('');
	let [subject, setSubject] = useState('');
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

	let handleSubjectChange = (e) => {
		setSubject(e.target.value);
	};

	let handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	let handleSubmit = (e) => {
		let re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

		if (re.test(email)) {
			e.preventDefault();
			setFirstName('');
			setLastName('');
			setEmail('');
			setSubject('');
			setMessage('');
			props.handleClick();
		} else {
			return;
		}
	};

	return (
		<form className='contact-form'>
			<div className='first-name-input-container'>
				<Label htmlFor='firstName' className='first-name-label' value='First Name' />
				<span className='label-required'>*</span>
				<FirstNameInput firstNameState={firstName} handleFirstNameChange={handleFirstNameChange} />
			</div>
			<div className='last-name-input-container'>
				<Label htmlFor='lastName' className='last-name-label' value='Last Name' />
				<LastNameInput lastNameState={lastName} handleLastNameChange={handleLastNameChange} />
			</div>
			<div className='email-input-container'>
				<Label htmlFor='emailContact' className='email-input-label' value='Email Address' />
				<span className='label-required'>*</span>
				<EmailInputContact
					className='email-input email-input-contact'
					emailState={email}
					handleEmailChange={handleEmailChange}
				/>
			</div>
			<div className='subject-input-container'>
				<Label htmlFor='subject' className='subject-input-label' value='Subject' />
				<span className='label-required'>*</span>
				<SubjectInput subjectState={subject} handleSubjectChange={handleSubjectChange} />
			</div>
			<div className='message-input-container'>
				<Label htmlFor='message' className='message-input-label' value='Message' />
				<span className='label-required'>*</span>
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
