import React from 'react';
import './Video.scss';

let Video = ({ videoClassName, videoSrc }) => {
	return (
		<iframe
			className={videoClassName}
			src={videoSrc}
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		></iframe>
	);
};

export default Video;
