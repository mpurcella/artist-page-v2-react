import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../wrapper/Wrapper';
import './Modals.scss';

let VideoModal = (props) => {
	useEffect(() => {
		let body = document.body;
		body.classList.toggle('modal-open', props.isVideoOneOpen);

		return () => {
			body.classList.remove('modal-open');
		};
	}, [props.isVideoOneOpen]);

	useEffect(() => {
		let body = document.body;
		body.classList.toggle('modal-open', props.isVideoTwoOpen);

		return () => {
			body.classList.remove('modal-open');
		};
	}, [props.isVideoTwoOpen]);

	if (props.isVideoOneOpen === false || props.isVideoTwoOpen === false) {
		return null;
	} else if (props.isVideoOneOpen) {
		return ReactDOM.createPortal(
			<>
				<div className='modal-overlay' onClick={props.handleVideoOneClick}>
					<Wrapper>
						<div className={props.modalClassName}>{props.children}</div>
					</Wrapper>
				</div>
			</>,
			document.querySelector('#portal')
		);
	} else if (props.isVideoTwoOpen) {
		return ReactDOM.createPortal(
			<>
				<div className='modal-overlay' onClick={props.handleVideoTwoClick}>
					<Wrapper>
						<div className={props.modalClassName}>{props.children}</div>
					</Wrapper>
				</div>
			</>,
			document.querySelector('#portal')
		);
	}
};

export default VideoModal;
