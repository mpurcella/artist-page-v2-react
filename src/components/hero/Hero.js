import React from 'react';
import HeroImg from '../../images/banners/street.jpeg';
import './Hero.scss';

let Hero = () => {
	return (
		<div className='hero'>
			<img src={HeroImg} className='hero-img' alt='' />
		</div>
	);
};

export default Hero;
