import {useState, useEffect, useRef} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../layout/Wrapper';


const RoleEdit = () => {

	const {id} = useParams();
	const navigate = useNavigate();
	const [permissions, setPermissions] = useState([]);
	const [data, setData] = useState({
		name: '',
		permissions: []
	});
	let selected = new Set();

	useEffect(() => {
		const fetchRole = async () => {
			await axios.get(`roles/${id}/`).then(res => {
				selected = new Set(res.data.permissions);
				setData(res.data);
			})
		}

		fetchRole();
	}, [id]);

	useEffect(() => {
		const fetchPermissions = async () => {
			await axios.get('permissions/').then(res => {
				setPermissions(res.data)
			})
		}
		fetchPermissions()

	}, []);

	const check = (e) => {
		const id = parseInt(e.target.value);
		e.target.checked ? selected.add(id) : selected.delete(id);
	}

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		data.permissions = Array.from(selected);
		await axios.put(`roles/${id}/`, data);
		navigate("/roles");
	}


	return(
		<Wrapper>
			<div className="horizontal-form">	
				<h1 className="col-sm-12">Edit Role</h1>

				<form onSubmit={submit}>
					<div className="form-group col-sm-4">
				      	<label className="form-label">Name</label>          
				        <input type="text" className="form-control" placeholder="Enter first name" id="name" defaultValue={data.name} />
				    </div>

				    <div className="form-group col-sm-12">
				    	<label className="form-label">Permissions</label>
				    	{permissions.map((permission) => {
				    		return(
				    			<div key={permission.id} className="form-check">
				    				<label>
				    					<input className="form-check-input" id={permission.id} type="checkbox" value={permission.id} defaultChecked={data.permissions.includes(permission.id)} onChange={e => check(e)} />
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


export default RoleEdit;