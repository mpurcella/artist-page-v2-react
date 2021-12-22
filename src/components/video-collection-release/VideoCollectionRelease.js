import React from 'react';
import VideoTitle from '../video-title/VideoTitle';
import Video from '../video/Video';
import './VideoCollectionRelease.scss';

let VideoCollectionRelease = (props) => {
	return (
		<div className='video-collection-release'>
			<div className='video-collection-release-video'>
				<Video videoClassName={props.videoClassName} videoSrc={props.videoSrc} />
			</div>
			<div className='video-collection-release-info'>
				<VideoTitle videoTitleClassName={props.videoTitleClassName} videoTitleValue={props.videoTitleValue} />
			</div>
		</div>
	);
};

export default VideoCollectionRelease;
