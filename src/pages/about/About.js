import React from 'react';
import Text from '../../components/text/Text';
import { aboutTextData } from '../../components/text/TextData';
import Wrapper from '../../components/wrapper/Wrapper';
import './About.scss';

let About = () => {
	return (
		<main>
			<div className='about'>
				<Wrapper>
					<div className='about-container'>
						<Text textClassName={aboutTextData.className} textValue={aboutTextData.value} />
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default About;
