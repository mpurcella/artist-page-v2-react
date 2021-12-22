import React from 'react';
import './AlbumTitle.scss';

let AlbumTitle = ({ albumTitleClassName, albumTitleValue }) => {
	return (
		<>
			<h2 className={albumTitleClassName}>{albumTitleValue}</h2>
		</>
	);
};

export default AlbumTitle;
