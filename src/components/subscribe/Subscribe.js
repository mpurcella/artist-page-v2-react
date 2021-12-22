import React, { useState } from 'react';
import SubscribeForm from '../forms/subscribe-form/SubscribeForm';
import Heading from '../heading/Heading';
import { subscribeHeadingData } from '../heading/HeadingData';
import Modal from '../modal/Modal';
import { subscribeModalData } from '../modal/ModalData';
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
					<Heading
						headingClassName={subscribeHeadingData.className}
						headingValue={subscribeHeadingData.value}
					/>
					<Subheading
						subheadingClassName={subscribeSubheadingData.className}
						subheadingValue={subscribeSubheadingData.value}
					/>
					<SubscribeForm handleClick={handleClick} />
					<Modal
						modalTextClassName={subscribeModalData.textClassName}
						modalBtnClassName={subscribeModalData.btnClassName}
						modalValue={subscribeModalData.value}
						isModalOpen={isModalOpen}
						handleClick={handleClick}
					/>
				</div>
			</Wrapper>
		</div>
	);
};

export default Subscribe;
