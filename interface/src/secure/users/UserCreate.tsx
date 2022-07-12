import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../Wrapper.tsx';



const UserCreate = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		username: '',
		email: '',
		role: 0
	});
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		
		const fetchRoles = async () => {
			const response = await axios.get("roles/");
			setRoles(response.data);
		}
		fetchRoles();

	}, []);

	const handle = (e) => {
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.post('users/', data);
		navigate('/users');
	}

	return(
		<Wrapper>
			<div className="horizontal-form">	
				<h1 className="col-sm-12">Create User</h1>

				<form onSubmit={submit}>
					<div className="form-group col-sm-4">
				      	<label>First Name</label>          
				        <input type="text" className="form-control" placeholder="Enter first name" id="first_name" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Last Name</label>
				        <input type="text" className="form-control" placeholder="Enter last name" id="last_name" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Username</label>
				        <input type="text" className="form-control" placeholder="Enter username" id="username" onChange={e => handle(e)} />
				    </div>
				    
				    <div className="form-group col-sm-4">
				      	<label>Email</label>          
				        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Role</label>
				      	<select className="form-control" id="role" onChange={e => handle(e)}>
				      		<option>Select</option>
				      		{roles.map(role => {
				      			return(
				      				<option key={role.id} value={role.id}>{role.name}</option>
				      			)
				      		})}
				      	</select>
				    </div>
				    
				    <div className="form-group col-sm-12">		
				    	<button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
				    </div>
				</form>
			</div>
		</Wrapper>
	)
}

export default UserCreate;