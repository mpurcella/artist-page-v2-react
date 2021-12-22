import React from 'react';
import MediaLinks from '../../components/media-links/MediaLinks';
import Wrapper from '../../components/wrapper/Wrapper';
import './Media.scss';

let Media = () => {
	return (
		<main>
			<div className='media'>
				<Wrapper>
					<div className='media-links'>
						<MediaLinks className='media-links-list' />
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default Media;
