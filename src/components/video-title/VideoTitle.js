import React from 'react';
import './VideoTitle.scss';

let VideoTitle = ({ videoTitleClassName, videoTitleValue }) => {
	return (
		<>
			<h2 className={videoTitleClassName}>{videoTitleValue}</h2>
		</>
	);
};

export default VideoTitle;
