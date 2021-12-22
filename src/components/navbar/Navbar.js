import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Logo from '../logo/Logo';
import Social from '../social-links/SocialLinks';
import { logoData } from '../logo/LogoData';
import NavMenuButton from '../nav-menu-button/NavMenuButton';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import Dropdown from '../dropdown/Dropdown';

let Navbar = () => {
	let [click, setClick] = useState(false);
	let [dropdown, setDropdown] = useState(false);
	let [navBackground, setNavBackground] = useState(false);

	let handleClick = () => {
		setClick(!click);
	};

	let closeNavMenu = () => {
		setClick(false);
	};

	let onMouseEnter = () => {
		setDropdown(true);
	};

	let onMouseLeave = () => {
		setDropdown(false);
	};

	let handleDropdown = () => {
		setDropdown(false);
	};

	let showNavBackground = () => {
		if (window.scrollY >= 30) {
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
				<div className='navbar-logo'>
					<Logo logoClassName={'navbar-logo-img'} logoSrc={logoData.src} closeNavMenu={closeNavMenu} />
				</div>
				<nav className={click ? 'navbar-navigation active' : 'navbar-navigation'}>
					<div className='nav-links'>
						<ul className='nav-links-list'>
							<li className='nav-links-item'>
								<NavLink
									exact='true'
									to='/'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									Home
								</NavLink>
							</li>
							<li className='nav-links-item'>
								<NavLink
									exact='true'
									to='/about'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									About
								</NavLink>
							</li>
							<li className='nav-links-item'>
								<NavLink
									exact='true'
									to='/store'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									Store
								</NavLink>
							</li>
							<li className='nav-links-item'>
								<NavLink
									exact='true'
									to='/tour'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									Tour
								</NavLink>
							</li>
							<li
								className='nav-links-item dropdown'
								onMouseEnter={onMouseEnter}
								onMouseLeave={onMouseLeave}
							>
								<NavLink
									exact='true'
									to='/media'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									Media
									<FaChevronDown className='nav-link-dropdown-icon' />
								</NavLink>
								<Dropdown dropdown={dropdown} handleDropdown={handleDropdown} />
							</li>
							<li className='nav-links-item'>
								<NavLink
									exact='true'
									to='/contact'
									className={(navData) => 'nav-links-link' + (navData.isActive ? ' active' : '')}
									onClick={closeNavMenu}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='nav-social'>
						<Social className='nav-social-list header-nav' />
					</div>
				</nav>
				<NavMenuButton click={click} handleClick={handleClick} />
			</div>
		</header>
	);
};

export default Navbar;
