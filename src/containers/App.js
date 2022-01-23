import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Media from '../pages/media/Media';
import Tour from '../pages/tour/Tour';
import Store from '../pages/store/Store';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Subscribe from '../components/subscribe/Subscribe';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';

let App = () => {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Hero />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/store' element={<Store />} />
				<Route path='/tour' element={<Tour />} />
				<Route path='/media' element={<Media />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Subscribe />
			<Footer />
		</>
	);
};

export default App;
