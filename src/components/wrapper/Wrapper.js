import React from 'react';
import './Wrapper.scss';

let Wrapper = (props) => {
	return <div className='wrapper'>{props.children}</div>;
};

export default Wrapper;
