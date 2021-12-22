import React, { useState } from 'react';
import ContactForm from '../../components/forms/contact-form/ContactForm';
import Wrapper from '../../components/wrapper/Wrapper';
import './Contact.scss';
import Modal from '../../components/modal/Modal';
import { contactModalData } from '../../components/modal/ModalData';

let Contact = () => {
	let [isModalOpen, setIsModalOpen] = useState(false);

	let handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<main>
			<div className='contact'>
				<Wrapper>
					<ContactForm handleClick={handleClick} />
					<Modal
						modalTextClassName={contactModalData.textClassName}
						modalBtnClassName={contactModalData.btnClassName}
						modalValue={contactModalData.value}
						isModalOpen={isModalOpen}
						handleClick={handleClick}
					/>
				</Wrapper>
			</div>
		</main>
	);
};

export default Contact;
