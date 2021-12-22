import React from 'react';
import Heading from '../../components/heading/Heading';
import { albumDescriptionData } from '../../components/album-description/AlbumDescriptionData';
import { albumImgData } from '../../components/album-img/AlbumImgData';
import AudioCollectionRelease from '../../components/audio-collection-release/AudioCollectionRelease';
import { albumTitleData } from '../../components/album-title/AlbumTitleData';
import { buttonLinkData } from '../../components/button-link/ButtonLinkData';
import Wrapper from '../../components/wrapper/Wrapper';
import './AudioCollection.scss';
import { audioCollectionHeadingData } from '../../components/heading/HeadingData';

let AudioCollection = () => {
	return (
		<main>
			<div className='audio-collection'>
				<Wrapper>
					<div className='audio-collection-container'>
						<Heading
							headingClassName={audioCollectionHeadingData.className}
							headingValue={audioCollectionHeadingData.value}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[0].src}
							albumImgAlt={albumImgData[0].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[0].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[1].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[1].src}
							albumImgAlt={albumImgData[1].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[1].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[2].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[2].src}
							albumImgAlt={albumImgData[2].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[2].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[3].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[3].src}
							albumImgAlt={albumImgData[3].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[3].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[4].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[4].src}
							albumImgAlt={albumImgData[4].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[4].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[5].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
						<AudioCollectionRelease
							albumImgClassName={'album-img'}
							albumImgSrc={albumImgData[5].src}
							albumImgAlt={albumImgData[5].alt}
							albumTitleClassName={'album-title media-title'}
							albumTitleValue={albumTitleData[5].value}
							albumDescriptionClassName='album-description audio-collection-description'
							albumDescriptionValue={albumDescriptionData[6].value}
							btnLinkClassName={buttonLinkData[4].className}
							btnLinkValue={buttonLinkData[4].value}
							btnLinkPath={buttonLinkData[4].link}
						/>
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default AudioCollection;
