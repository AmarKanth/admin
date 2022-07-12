import {Component} from 'react';
import {useParams} from 'react-router-dom';
import Wrapper from '../Wrapper.tsx';


const UserEdit = () => {
	console.log(useParams());

	return(
		<Wrapper>
			<p>User Edit</p>
		</Wrapper>
	)
}

export default UserEdit;