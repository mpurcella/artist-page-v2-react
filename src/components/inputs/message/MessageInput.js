import React from 'react';
import './MessageInput.scss';

let MessageInput = (props) => {
	return (
		<textarea
			name='message'
			className='message-input'
			id='messageInput'
			placeholder='Message...'
			required='required'
			aria-required='true'
			aria-label='Message'
			autoCorrect='off'
			cols='30'
			rows='1'
			onChange={props.handleMessageChange}
			value={props.messageState}
		></textarea>
	);
};

export default MessageInput;
