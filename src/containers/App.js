import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Media from '../pages/media/Media';
import AudioCollection from '../pages/audio-collection/AudioCollection';
import VideoCollection from '../pages/video-collection/VideoCollection';
import Tour from '../pages/tour/Tour';
import Store from '../pages/store/Store';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';

let App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
				<Route path='/tour' element={<Tour />} />
				<Route path='/media' element={<Media />} />
				<Route path='media/audio-collection' element={<AudioCollection />} />
				<Route path='media/video-collection' element={<VideoCollection />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
