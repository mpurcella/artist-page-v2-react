import { useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import './Modals.scss';

let TextModal = (props) => {
	useEffect(() => {
		let body = document.body;
		body.classList.toggle('modal-open', props.isModalOpen);

		return () => {
			body.classList.remove('modal-open');
		};
	}, [props.isModalOpen]);

	if (props.isModalOpen === false) {
		return null;
	} else {
		return ReactDOM.createPortal(
			<>
				<div className='modal-overlay' onClick={props.handleClick}>
					<div className={props.modalClassName}>
						<button className={props.modalBtnClassName} type='button' onClick={props.handleClick}>
							X
						</button>
						{props.children}
					</div>
				</div>
			</>,
			document.querySelector('#portal')
		);
	}
};

export default TextModal;
