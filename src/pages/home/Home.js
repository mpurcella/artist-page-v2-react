import React from 'react';
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
import About from '../../components/about/About';
import Heading from '../../components/heading/Heading';
import { merchHeadingData } from '../../components/heading/HeadingData';
import Products from '../../components/products/Products';
import { homeProductsListData } from '../../components/products-list/HomeProductsListData';

let Home = () => {
	return (
		<main>
			<section>
				<div className='album-release home-album-release'>
					<Wrapper>
						<div className='album-release-container'>
							<div className='album-release-info'>
								<div className='album-release-title'>
									<AlbumTitle
										albumTitleClassName='album-title'
										albumTitleValue={albumTitleData.value}
									/>
								</div>
								<div className='album-release-description'>
									<AlbumDescription
										albumDescriptionClassName='album-description home-description'
										albumDescriptionValue={albumDescriptionData.value}
									/>
								</div>
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
										albumImgClassName='album-img'
										albumImgSrc={albumImgData.src}
										albumImgAlt={albumImgData.alt}
									/>
								</div>
							</div>
						</div>
					</Wrapper>
				</div>
			</section>
			<section>
				<div className='about'>
					<Wrapper>
						<About />
					</Wrapper>
				</div>
			</section>
			<section>
				<div className='merch'>
					<Wrapper>
						<div className='merch-container'>
							<div className='merch-heading'>
								<Heading
									headingClassName={merchHeadingData.className}
									headingValue={merchHeadingData.value}
								/>
							</div>
							<div className='home-products'>
								<Products
									productListData={homeProductsListData}
									productsList={'products-list home-products-list'}
									productsListItem={'products-list-item home-products-list-item'}
									productsListItemInfo={'products-list-item-info home-products-list-item-info'}
									productsName={'products-name home-products-name'}
									productsDescription={'products-description home-products-description'}
									productsPrice={'products-price home-products-price'}
								/>
							</div>
						</div>
					</Wrapper>
				</div>
			</section>
		</main>
	);
};

export default Home;
