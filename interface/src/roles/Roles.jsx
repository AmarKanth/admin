import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Wrapper from '../layout/Wrapper';
import axios from 'axios';


const Roles = () => {
	
	const [roles, setRoles] = useState([]);
	const [permissions, setPermissions] = useState([])

	useEffect(() => {
		
		const fetchRoles = async () => {
			const response = await axios.get("roles/");
			setRoles(response.data);
		}
		fetchRoles();

	}, []);

	useEffect(() => {

		const fetchPermissions = async () => {
			const response = await axios.get("permissions/");
			setPermissions(response.data)
		}
		fetchPermissions();

	}, []);

	const findPermissions = (ids) => {
		var response = permissions.filter(permission => ids.includes(permission.id))

		return(
			<ul>
				{response.map((permission, index) => 
		    		<li key={index}>{permission.name.replaceAll('_',' ')}</li>
		    	)}
			</ul>
		)
	}

	const del = async (id: number, e: SyntheticEvent) => {
		e.preventDefault();
		if(window.confirm("Are you sure?")){
			await axios.delete(`roles/${id}/`);
		}
		setRoles(roles.filter(role => role.id !== id));
	}
	
	return(
		<Wrapper>
			<div className="add-button">
           		<Link to={'/roles/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
	        </div>

	        <div className="table-responsive">
	            <table className="table table-bordered">
	                <thead className="table-dark">
	                    <tr>
	                      	<th scope="col">#</th>
	                      	<th scope="col">Name</th>
	                      	<th scope="col">Permissions</th>
	                      	<th scope="col">Action</th>
	                    </tr>
	                </thead>
	                <tbody>
	                	{roles.map((role) => {
	                		return(
	                			<tr key={role.id}>
			                        <td>{role.id}</td>
			                        <td>{role.name}</td>
			                        <td>{findPermissions(role.permissions)}</td>
			                        <td>
			                        	<a href={`/roles/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</a>
			                        	<a href="!#" className="btn btn-sm btn-outline-secondary" onClick={(e) => del(role.id, e)}>Delete</a>
			                        </td>
			                    </tr>
	                		)
	                	})}
	                </tbody>
	            </table>
	        </div>
		</Wrapper>
	)
}


export default Roles;