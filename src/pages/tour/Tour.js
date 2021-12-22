import React from 'react';
import TourDates from '../../components/tour-dates/TourDates';
import Wrapper from '../../components/wrapper/Wrapper';
import './Tour.scss';

let Tour = () => {
	return (
		<main>
			<div className='tour-dates'>
				<Wrapper>
					<div className='tour-dates-container'>
						<TourDates />
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default Tour;
