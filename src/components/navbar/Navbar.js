import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Logo from '../logo/Logo';
import Social from '../social-links/SocialLinks';
import { logoData } from '../logo/LogoData';
import NavMenuButton from '../nav-menu-button/NavMenuButton';
import { Link } from 'react-router-dom';
import NavLinks from '../nav-links/NavLinks';

let Navbar = () => {
	let [click, setClick] = useState(false);
	let [navBackground, setNavBackground] = useState(false);

	let handleClick = () => {
		setClick(!click);
	};

	let closeNavMenu = () => {
		setClick(false);
	};

	let showNavBackground = () => {
		if (window.scrollY > 0) {
			setNavBackground(true);
		} else {
			setNavBackground(false);
		}
	};

	useEffect(() => {
		let body = document.body;
		body.classList.toggle('nav-menu-open', click);

		return () => {
			body.classList.remove('nav-menu-open');
		};
	}, [click]);

	useEffect(() => {
		window.addEventListener('scroll', showNavBackground);

		return () => {
			window.removeEventListener('scroll', showNavBackground);
		};
	}, []);

	return (
		<header>
			<div className={navBackground ? 'navbar active' : 'navbar'}>
				<Link to='/' className='navbar-logo' onClick={closeNavMenu}>
					<Logo
						logoClassName={logoData.className}
						logoSrc={logoData.src}
						logoAlt={logoData.alt}
						closeNavMenu={closeNavMenu}
					/>
				</Link>
				<nav className={click ? 'navbar-navigation active' : 'navbar-navigation'}>
					<div className='nav-links'>
						<NavLinks closeNavMenu={closeNavMenu} />
					</div>
					<div className='nav-social'>
						<Social className='nav-social-list header-social' />
					</div>
				</nav>
				<NavMenuButton click={click} handleClick={handleClick} />
			</div>
		</header>
	);
};

export default Navbar;
