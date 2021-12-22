import React from 'react';
import AlbumDescription from '../album-description/AlbumDescription';
import AlbumImg from '../album-img/AlbumImg';
import AlbumTitle from '../album-title/AlbumTitle';
import ButtonLink from '../button-link/ButtonLink';
import './AudioCollectionRelease.scss';

let AudioCollectionRelease = (props) => {
	return (
		<div className='audio-collection-release'>
			<div className='audio-collection-release-img'>
				<AlbumImg
					albumImgClassName={props.albumImgClassName}
					albumImgSrc={props.albumImgSrc}
					albumImgAlt={props.AlbumImgAlt}
				/>
				<div className='img-overlay'></div>
			</div>
			<div className='audio-collection-release-info'>
				<AlbumTitle albumTitleClassName={props.albumTitleClassName} albumTitleValue={props.albumTitleValue} />
				<AlbumDescription
					albumDescriptionClassName={props.albumDescriptionClassName}
					albumDescriptionValue={props.albumDescriptionValue}
				/>
			</div>
			<div className='audio-collection-release-btn'>
				<ButtonLink
					btnLinkClassName={props.btnLinkClassName}
					btnLinkValue={props.btnLinkValue}
					btnLinkPath={props.btnLinkPath}
				/>
			</div>
		</div>
	);
};

export default AudioCollectionRelease;
