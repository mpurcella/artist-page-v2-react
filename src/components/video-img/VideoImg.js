import React, { useState } from 'react';
import { videoImgData } from './VideoImgData';
import { FaPlayCircle } from 'react-icons/fa';
import Video from '../video/Video';
import { videoListData } from '../video-list/VideoListData';
import './VideoImg.scss';
import VideoModal from '../modals/VideoModal';

let VideoImg = () => {
	let [isVideoOneOpen, setIsVideoOneOpen] = useState(false);
	let [isVideoTwoOpen, setIsVideoTwoOpen] = useState(false);

	let handleVideoOneClick = () => {
		setIsVideoOneOpen(!isVideoOneOpen);
	};

	let handleVideoTwoClick = () => {
		setIsVideoTwoOpen(!isVideoTwoOpen);
	};

	return (
		<ul className='video-images-list'>
			<li className='video-images-list-item' key={videoImgData[0].id} onClick={handleVideoOneClick}>
				<div className='video-images-image-container'>
					<img src={videoImgData[0].src} className={videoImgData[0].className} alt={videoImgData[0].alt} />
					<div className='video-images-play-btn-container'>
						<FaPlayCircle className='video-image-play-btn' />
					</div>
				</div>
				<div className='video-images-info'>
					<h2 className='video-image-title'>{videoImgData[0].value}</h2>
				</div>
				<VideoModal
					modalClassName='modal video-modal'
					isVideoOneOpen={isVideoOneOpen}
					handleVideoOneClick={handleVideoOneClick}
				>
					<Video videoClassName={videoListData[0].className} videoSrc={videoListData[0].src} />
				</VideoModal>
			</li>
			<li className='video-images-list-item' key={videoImgData[1].id} onClick={handleVideoTwoClick}>
				<div className='video-images-image-container'>
					<img src={videoImgData[1].src} className={videoImgData[1].className} alt={videoImgData[1].alt} />
					<div className='video-images-play-btn-container'>
						<FaPlayCircle className='video-image-play-btn' />
					</div>
				</div>
				<div className='video-images-info'>
					<h2 className='video-image-title'>{videoImgData[1].value}</h2>
				</div>
				<VideoModal
					modalClassName='modal video-modal'
					isVideoTwoOpen={isVideoTwoOpen}
					handleVideoTwoClick={handleVideoTwoClick}
				>
					<Video videoClassName={videoListData[1].className} videoSrc={videoListData[1].src} />
				</VideoModal>
			</li>
		</ul>
	);
};

export default VideoImg;
