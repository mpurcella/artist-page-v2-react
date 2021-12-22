import React from 'react';
import './AlbumDescription.scss';

let AlbumDescription = ({ albumDescriptionClassName, albumDescriptionValue }) => {
	return (
		<>
			<p className={albumDescriptionClassName}>{albumDescriptionValue}</p>
		</>
	);
};

export default AlbumDescription;
