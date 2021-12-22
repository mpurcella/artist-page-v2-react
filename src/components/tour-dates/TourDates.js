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
							<div className='tour-dates-date'>
								<p className='tour-dates-date-text'>{data.date}</p>
							</div>
							<div className='tour-dates-venue'>
								<p className='tour-dates-venue-text'>{data.venue}</p>
							</div>
							<div className='tour-dates-location'>
								<p className='tour-dates-location-text'>{data.location}</p>
							</div>
						</div>
						<div className='tour-dates-tickets-btn'>
							<ButtonLink
								btnLinkClassName={buttonLinkData[3].className}
								btnLinkPath={buttonLinkData[3].link}
								btnLinkValue={buttonLinkData[3].value}
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default TourDates;
