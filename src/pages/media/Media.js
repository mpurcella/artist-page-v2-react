import React from 'react';
import Heading from '../../components/heading/Heading';
import { mediaHeadingData } from '../../components/heading/HeadingData';
import VideoImg from '../../components/video-img/VideoImg';
import Wrapper from '../../components/wrapper/Wrapper';
import './Media.scss';

let Media = () => {
	return (
		<main>
			<section>
				<div className='media'>
					<Wrapper>
						<div className='media-container'>
							<div className='media-heading'>
								<Heading
									headingClassName={mediaHeadingData.className}
									headingValue={mediaHeadingData.value}
								/>
							</div>
							<div className='video-images'>
								<VideoImg />
							</div>
						</div>
					</Wrapper>
				</div>
			</section>
		</main>
	);
};

export default Media;
