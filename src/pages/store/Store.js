import React from 'react';
import Heading from '../../components/heading/Heading';
import { storeHeadingData } from '../../components/heading/HeadingData';
import './Store.scss';

let Store = () => {
	return (
		<main>
			<div className='store'>
				<Heading headingClassName={storeHeadingData.className} headingValue={storeHeadingData.value} />
			</div>
		</main>
	);
};

export default Store;
