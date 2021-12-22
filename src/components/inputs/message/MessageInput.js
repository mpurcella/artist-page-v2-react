import React from 'react';
import './MessageInput.scss';

let MessageInput = (props) => {
	return (
		<textarea
			name='message'
			className='message-input'
			id='messageInput'
			required='required'
			autoCorrect='off'
			cols='30'
			rows='12'
			onChange={props.handleMessageChange}
			value={props.messageState}
		></textarea>
	);
};

export default MessageInput;
