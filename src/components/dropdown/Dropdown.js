import React from 'react';
import { NavLink } from 'react-router-dom';
import { dropdownData } from './DropdownData';
import './Dropdown.scss';

let Dropdown = (props) => {
	return (
		<ul className={props.dropdown ? 'dropdown-list visible' : 'dropdown-list'}>
			{dropdownData.map((data) => {
				return (
					<li className='dropdown-item' key={data.id}>
						<NavLink
							to={data.link}
							className={(navData) => 'dropdown-link' + (navData.isActive ? ' active' : '')}
							onClick={props.handleDropdown}
						>
							{data.value}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default Dropdown;
