import React from 'react';
import './SubjectInput.scss';

let SubjectInput = (props) => {
	return (
		<input
			type='text'
			name='subject'
			className='subject-input'
			id='subjectInput'
			required='required'
			autoCorrect='off'
			onChange={props.handleSubjectChange}
			value={props.subjectState}
		/>
	);
};

export default SubjectInput;
