import { useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

let Modal = ({ modalTextClassName, modalBtnClassName, modalValue, isModalOpen, handleClick }) => {
	useEffect(() => {
		let body = document.body;
		body.classList.toggle('modal-open', isModalOpen);

		return () => {
			body.classList.remove('modal-open');
		};
	}, [isModalOpen]);

	if (isModalOpen === false) {
		return null;
	} else {
		return ReactDOM.createPortal(
			<>
				<div className='modal-overlay' onClick={handleClick} />
				<div className='modal'>
					<p className={modalTextClassName}>{modalValue}</p>
					<button className={modalBtnClassName} onClick={handleClick}>
						X
					</button>
				</div>
			</>,
			document.querySelector('#portal')
		);
	}
};

export default Modal;
