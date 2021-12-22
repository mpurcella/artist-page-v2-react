import React from 'react';
import Heading from '../../components/heading/Heading';
import { videoCollectionHeadingData } from '../../components/heading/HeadingData';
import VideoCollectionRelease from '../../components/video-collection-release/VideoCollectionRelease';
import { videosData } from '../../components/videos/Videos';
import Wrapper from '../../components/wrapper/Wrapper';
import './VideoCollection.scss';

let VideoCollection = () => {
	return (
		<main>
			<div className='video-collection'>
				<Wrapper>
					<div className='video-collection-container'>
						<Heading
							headingClassName={videoCollectionHeadingData.className}
							headingValue={videoCollectionHeadingData.value}
						/>
						<VideoCollectionRelease
							videoClassName={videosData[0].className}
							videoSrc={videosData[0].src}
							videoTitleClassName='video-title'
							videoTitleValue={videosData[0].value}
						/>
						<VideoCollectionRelease
							videoClassName={videosData[1].className}
							videoSrc={videosData[1].src}
							videoTitleClassName='video-title'
							videoTitleValue={videosData[1].value}
						/>
						<VideoCollectionRelease
							videoClassName={videosData[2].className}
							videoSrc={videosData[2].src}
							videoTitleClassName='video-title'
							videoTitleValue={videosData[2].value}
						/>
						<VideoCollectionRelease
							videoClassName={videosData[3].className}
							videoSrc={videosData[3].src}
							videoTitleClassName='video-title'
							videoTitleValue={videosData[3].value}
						/>
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default VideoCollection;
