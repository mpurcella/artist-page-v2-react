import React, { useState } from 'react';
import SubscribeForm from '../forms/subscribe-form/SubscribeForm';
import Heading from '../heading/Heading';
import { subscribeHeadingData } from '../heading/HeadingData';
import TextModal from '../modals/TextModal';
import Subheading from '../subheading/Subheading';
import { subscribeSubheadingData } from '../subheading/SubheadingData';
import Wrapper from '../wrapper/Wrapper';
import './Subscribe.scss';

let Subscribe = () => {
	let [isModalOpen, setIsModalOpen] = useState(false);

	let handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className='subscribe'>
			<Wrapper>
				<div className='subscribe-container'>
					<div className='subscribe-heading'>
						<Heading
							headingClassName={subscribeHeadingData.className}
							headingValue={subscribeHeadingData.value}
						/>
					</div>
					<div className='subscribe-subheading'>
						<Subheading
							subheadingClassName={subscribeSubheadingData.className}
							subheadingValue={subscribeSubheadingData.value}
						/>
					</div>
					<SubscribeForm handleClick={handleClick} />
					<TextModal
						modalClassName='modal subscribe-modal'
						modalBtnClassName='modal-close-btn'
						isModalOpen={isModalOpen}
						handleClick={handleClick}
					>
						<p className='modal-text'>You are now subscribed to receive updates about Heart Line!</p>
					</TextModal>
				</div>
			</Wrapper>
		</div>
	);
};

export default Subscribe;
