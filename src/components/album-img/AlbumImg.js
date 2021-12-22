import React from 'react';
import './AlbumImg.scss';

let AlbumImg = ({ albumImgClassName, albumImgSrc, albumImgAlt }) => {
	return (
		<>
			<img className={albumImgClassName} src={albumImgSrc} alt={albumImgAlt} />
		</>
	);
};

export default AlbumImg;
