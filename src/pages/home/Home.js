import React from 'react';
import Subscribe from '../../components/subscribe/Subscribe';
import { albumTitleData } from '../../components/album-title/AlbumTitleData';
import { albumDescriptionData } from '../../components/album-description/AlbumDescriptionData';
import { buttonLinkData } from '../../components/button-link/ButtonLinkData';
import { albumImgData } from '../../components/album-img/AlbumImgData';
import Wrapper from '../../components/wrapper/Wrapper';
import AlbumTitle from '../../components/album-title/AlbumTitle';
import AlbumDescription from '../../components/album-description/AlbumDescription';
import ButtonLink from '../../components/button-link/ButtonLink';
import AlbumImg from '../../components/album-img/AlbumImg';
import './Home.scss';

let Home = () => {
	return (
		<main>
			<div className='album-release home-album-release'>
				<Wrapper>
					<div className='album-release-container'>
						<div className='album-release-info'>
							<AlbumTitle
								albumTitleClassName='album-title home-title'
								albumTitleValue={albumTitleData[0].value}
							/>
							<AlbumDescription
								albumDescriptionClassName='album-description home-description'
								albumDescriptionValue={albumDescriptionData[0].value}
							/>
							<div className='album-links'>
								<ButtonLink
									btnLinkClassName={buttonLinkData[0].className}
									btnLinkPath={buttonLinkData[0].link}
									btnLinkValue={buttonLinkData[0].value}
								/>
								<ButtonLink
									btnLinkClassName={buttonLinkData[1].className}
									btnLinkPath={buttonLinkData[1].link}
									btnLinkValue={buttonLinkData[1].value}
								/>
							</div>
						</div>
						<div className='album-release-img'>
							<div className='album-img-container'>
								<AlbumImg
									albumImgClassName='album-img home-img'
									albumImgSrc={albumImgData[0].src}
									albumImgAlt={albumImgData[0].alt}
								/>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
			<Subscribe />
		</main>
	);
};

export default Home;
