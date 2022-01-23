import React from 'react';
import { aboutData } from './AboutData';
import './About.scss';

let About = () => {
	return (
		<>
			<p className={aboutData.className}>{aboutData.value}</p>
		</>
	);
};

export default About;
