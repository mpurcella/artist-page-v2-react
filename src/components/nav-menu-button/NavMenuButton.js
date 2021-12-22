import React from 'react';
import './NavMenuButton.scss';

let NavMenuButton = (props) => {
	return (
		<div className={props.click ? 'nav-menu-button active' : 'nav-menu-button'} onClick={props.handleClick}>
			<div className='line line-1'></div>
			<div className='line line-2'></div>
			<div className='line line-3'></div>
		</div>
	);
};

export default NavMenuButton;
