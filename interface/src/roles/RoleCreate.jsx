import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Wrapper from '../layout/Wrapper';
import axios from 'axios';


const RoleCreate = () => {
	const navigate = useNavigate();
	const [permissions, setPermissions] = useState([]);
	const selected = new Set();
	const [data, setData] = useState({
		name: '',
		permissions: []
	});


	useEffect(() => {

		const fetchPermissions = async () => {
			await axios.get('permissions/').then(res => {
				setPermissions(res.data)
			})
		}
		fetchPermissions();

	}, [])

	const check = (e) => {
		const id = e.target.value;
		e.target.checked ? selected.add(id) : selected.delete(id)
	}

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		data.permissions = Array.from(selected);
		await axios.post('roles/', data);
		navigate('/roles');
	}


	return(
		<Wrapper>
			<div className="horizontal-form">	
				<h1 className="col-sm-12">Create Role</h1>

				<form onSubmit={submit}>
					<div className="form-group col-sm-4">
				      	<label className="form-label">Name</label>          
				        <input type="text" className="form-control" placeholder="Enter first name" id="name" onChange={e => data.name = e.target.value} />
				    </div>

				    <div className="form-group col-sm-12">
				    	<label className="form-label">Permissions</label>
				    	{permissions.map((permission) => {
				    		return(
				    			<div key={permission.id} className="form-check">
				    				<label>
				    					<input className="form-check-input" type="checkbox" value={permission.id} onChange={e => check(e)} />
				    					{permission.name.replaceAll('_',' ')}
				    				</label>
				    			</div>
				    		)
				    	})}
				    </div>
				    
				    <div className="form-group col-sm-12">		
				    	<button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
				    </div>
				</form>
			</div>
		</Wrapper>
	)
}


export default RoleCreate;