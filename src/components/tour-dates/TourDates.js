import React from 'react';
import ButtonLink from '../button-link/ButtonLink';
import { buttonLinkData } from '../button-link/ButtonLinkData';
import { tourDatesData } from './TourDatesData';
import './TourDates.scss';

let TourDates = () => {
	return (
		<ul className='tour-dates-list'>
			{tourDatesData.map((data) => {
				return (
					<li className='tour-dates-item' key={data.id}>
						<div className='tour-dates-item-info'>
							<p className='tour-dates-date'>{data.date}</p>
							<p className='tour-dates-venue'>{data.venue}</p>
							<p className='tour-dates-location'>{data.location}</p>
						</div>
						<div className='tour-dates-tickets-btn'>
							<ButtonLink
								btnLinkClassName={buttonLinkData[2].className}
								btnLinkPath={buttonLinkData[2].link}
								btnLinkValue={buttonLinkData[2].value}
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default TourDates;
