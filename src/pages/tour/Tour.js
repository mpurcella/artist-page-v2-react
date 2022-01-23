import React from 'react';
import Heading from '../../components/heading/Heading';
import { tourHeadingData } from '../../components/heading/HeadingData';
import TourDates from '../../components/tour-dates/TourDates';
import Wrapper from '../../components/wrapper/Wrapper';
import './Tour.scss';

let Tour = () => {
	return (
		<main>
			<div className='tour-dates'>
				<Wrapper>
					<div className='tour-dates-container'>
						<div className='tour-dates-heading'>
							<Heading
								headingClassName={tourHeadingData.className}
								headingValue={tourHeadingData.value}
							/>
						</div>
						<TourDates />
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default Tour;
