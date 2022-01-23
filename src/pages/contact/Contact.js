import React, { useState } from 'react';
import ContactForm from '../../components/forms/contact-form/ContactForm';
import Wrapper from '../../components/wrapper/Wrapper';
import './Contact.scss';
import TextModal from '../../components/modals/TextModal';
import Heading from '../../components/heading/Heading';
import Subheading from '../../components/subheading/Subheading';
import { contactHeadingData } from '../../components/heading/HeadingData';
import { contactSubheadingData } from '../../components/subheading/SubheadingData';

let Contact = () => {
	let [isModalOpen, setIsModalOpen] = useState(false);

	let handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<main>
			<div className='contact'>
				<Wrapper>
					<div className='contact-container'>
						<div className='contact-heading'>
							<Heading
								headingClassName={contactHeadingData.className}
								headingValue={contactHeadingData.value}
							/>
						</div>
						<div className='contact-subheading'>
							<Subheading
								subheadingClassName={contactSubheadingData.className}
								subheadingValue={contactSubheadingData.value}
							/>
						</div>
						<div className='contact-form-container'>
							<ContactForm handleClick={handleClick} />
						</div>
						<TextModal
							modalClassName='modal contact-modal'
							modalBtnClassName='modal-close-btn'
							isModalOpen={isModalOpen}
							handleClick={handleClick}
						>
							<p className='modal-text'>
								Message received! Please allow 24-48 hours for us to review and respond to your message.
								Thank You.
							</p>
						</TextModal>
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default Contact;
